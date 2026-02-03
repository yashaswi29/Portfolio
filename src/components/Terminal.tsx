import React, { useState, useEffect, useRef, KeyboardEvent, ChangeEvent } from 'react';

// Configuration similar to webshell/config.json
const CONFIG = {
    username: 'visitor',
    hostname: 'yashaswi-io',
    colors: {
        background: '#0C0623',
        foreground: '#F8DDE5',
        prompt: {
            default: '#A5A7A7',
            user: '#FE6BC9',
            host: '#70FDFF',
            input: '#FF7685'
        },
        banner: '#FF9951',
        commands: '#FD9BDB',
        link: '#B6AAEE'
    },
    commands: {
        help: 'List available commands',
        whoami: 'Display user info',
        about: 'About Yashaswi',
        projects: 'View projects',
        contact: 'Contact info',
        clear: 'Clear terminal',
    }
};

interface HistoryItem {
    type: 'command' | 'output';
    content: string | JSX.Element;
    prefix?: string;
}

interface TerminalProps {
    className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ className = "" }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<HistoryItem[]>([
        {
            type: 'output',
            content: (
                <div style={{ color: CONFIG.colors.banner }}>
                    <pre className="font-mono text-[10px] sm:text-xs leading-none mb-4 whitespace-pre-wrap hidden sm:block">
                        {`███████╗██╗  ██╗███████╗██╗     ██╗
██╔════╝██║  ██║██╔════╝██║     ██║
███████╗███████║█████╗  ██║     ██║
╚════██║██╔══██║██╔══╝  ██║     ██║
███████║██║  ██║███████╗███████╗███████╗
╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝`}
                    </pre>
                    <p className="mb-2">Welcome to Yashaswi's Interactive Terminal v1.0.0</p>
                    <p className="mb-2">Type <span style={{ color: CONFIG.colors.commands }}>'help'</span> to see available commands.</p>
                </div>
            )
        }
    ]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        // Add command to history (UI)
        const newHistory: HistoryItem[] = [...history, {
            type: 'command',
            content: cmd,
            prefix: `${CONFIG.username}@${CONFIG.hostname}:~$`
        }];

        // Process command
        let output: JSX.Element | string = '';

        switch (trimmedCmd) {
            case 'help':
                output = (
                    <div className="grid grid-cols-1 gap-2">
                        {Object.entries(CONFIG.commands).map(([key, desc]) => (
                            <div key={key} className="flex flex-col sm:flex-row">
                                <span className="w-24 font-bold" style={{ color: CONFIG.colors.commands }}>{key}</span>
                                <span className="opacity-80">- {desc}</span>
                            </div>
                        ))}
                    </div>
                );
                break;

            case 'whoami':
                output = (
                    <div>
                        <p>User: {CONFIG.username}</p>
                        <p>Role: Visitor</p>
                        <p>Access Level: Read-Only</p>
                    </div>
                );
                break;

            case 'about':
                output = (
                    <div>
                        <p className="mb-2">Cloud Engineer & DevOps Enthusiast.</p>
                        <p>Passionate about building scalable infrastructure and automating everything.</p>
                        <p className="mt-2 text-sm opacity-70">Hint: Check the graphical 'About' page for more colors.</p>
                    </div>
                );
                break;

            case 'projects':
                output = (
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold underline mb-1" style={{ color: CONFIG.colors.link }}>Jenkins Migration Toolkit</p>
                            <p className="text-sm">Python-based toolkit to automate Jenkins job & plugin migration.</p>
                        </div>
                        <div>
                            <p className="font-bold underline mb-1" style={{ color: CONFIG.colors.link }}>ChatApp Analysis</p>
                            <p className="text-sm">Real-time chat with robust CI/CD pipeline on AWS.</p>
                        </div>
                        <div>
                            <p className="font-bold underline mb-1" style={{ color: CONFIG.colors.link }}>Microservices CI/CD</p>
                            <p className="text-sm">Pipeline system for 11 independent microservices using K8s.</p>
                        </div>
                    </div>
                );
                break;

            case 'contact':
                output = (
                    <div>
                        <p>Email: <a href="mailto:yashaswitiwari2003@gmail.com" className="underline hover:brightness-125" style={{ color: CONFIG.colors.link }}>yashaswitiwari2003@gmail.com</a></p>
                        <p>GitHub: <a href="https://github.com/yashaswi29" target="_blank" rel="noreferrer" className="underline hover:brightness-125" style={{ color: CONFIG.colors.link }}>github.com/yashaswi29</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/yashaswi-tiwari-5423211a8/" target="_blank" rel="noreferrer" className="underline hover:brightness-125" style={{ color: CONFIG.colors.link }}>Search 'Yashaswi Tiwari'</a></p>
                    </div>
                );
                break;

            case 'clear':
                setHistory([]);
                return; // Early return to avoid adding "clear" output

            case '':
                // Do nothing for empty input
                output = '';
                break;

            default:
                output = (
                    <p>
                        Command not found: <span className="font-bold text-red-400">{trimmedCmd}</span>.
                        Type <span style={{ color: CONFIG.colors.commands }}>'help'</span> for a list of commands.
                    </p>
                );
                break;
        }

        if (output) {
            newHistory.push({ type: 'output', content: output });
        }

        setHistory(newHistory);
        setCommandHistory(prev => [...prev, cmd]);
        setHistoryIndex(-1);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1;
                if (newIndex >= commandHistory.length) {
                    setHistoryIndex(-1);
                    setInput('');
                } else {
                    setHistoryIndex(newIndex);
                    setInput(commandHistory[newIndex]);
                }
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const match = Object.keys(CONFIG.commands).find(cmd => cmd.startsWith(input.toLowerCase()));
            if (match) {
                setInput(match);
            }
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    return (
        <div
            className={`font-vt323 text-lg sm:text-xl p-4 sm:p-8 shadow-2xl ${className}`}
            style={{ backgroundColor: CONFIG.colors.background, color: CONFIG.colors.foreground }}
        >
            <div
                ref={scrollRef}
                className="h-full overflow-y-auto w-full scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-transparent pr-2 flex flex-col"
                onClick={() => inputRef.current?.focus()}
            >
                <div className="flex-grow">
                    {history.map((item, index) => (
                        <div key={index} className="mb-2 break-words">
                            {item.type === 'command' ? (
                                <div className="flex flex-row items-center">
                                    <span className="mr-2 shrink-0 select-none">
                                        <span style={{ color: CONFIG.colors.prompt.user }}>{CONFIG.username}</span>
                                        <span className="text-gray-400">@</span>
                                        <span style={{ color: CONFIG.colors.prompt.host }}>{CONFIG.hostname}</span>
                                        <span className="text-gray-400">:$ ~</span>
                                    </span>
                                    <span style={{ color: CONFIG.colors.prompt.input }}>{item.content}</span>
                                </div>
                            ) : (
                                <div className="ml-0 sm:ml-4 opacity-90">{item.content}</div>
                            )}
                        </div>
                    ))}

                    {/* Input Line */}
                    <div className="flex flex-row items-center mt-2">
                        <span className="mr-2 shrink-0 select-none">
                            <span style={{ color: CONFIG.colors.prompt.user }}>{CONFIG.username}</span>
                            <span className="text-gray-400">@</span>
                            <span style={{ color: CONFIG.colors.prompt.host }}>{CONFIG.hostname}</span>
                            <span className="text-gray-400">:$ ~</span>
                        </span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            className="flex-grow bg-transparent border-none outline-none caret-indigo-400"
                            style={{ color: CONFIG.colors.prompt.input }}
                            autoFocus
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </div>
                </div>
            </div>
            );
};

            export default Terminal;
