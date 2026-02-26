import React, { useState, useEffect, useRef, KeyboardEvent, ChangeEvent } from 'react';
import { useTracker } from '../hooks/useTracker';
const CONFIG = {
    username: 'root',
    hostname: 'sre-master-node',
    colors: {
        background: '#0d1117', // Github Dark Dimmed
        foreground: '#c9d1d9', // Github Light
        prompt: {
            default: '#8b949e',
            user: '#58a6ff', // Blue
            host: '#79c0ff', // Light Blue
            input: '#c9d1d9'
        },
        banner: '#7ee787', // Green
        commands: '#f0883e', // Orange
        link: '#a5d6ff' // Light Link Blue
    },
    commands: {
        help: 'List available commands',
        whoami: 'Display user context',
        uptime: 'System uptime & load',
        stack: 'View infrastructure stack',
        deploy: 'Trigger deployment pipeline',
        clear: 'Clear terminal buffer',
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
    const { trackEvent } = useTracker();
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
        trackEvent('terminal', 'command_executed', trimmedCmd, { raw: cmd });
        const newHistory: HistoryItem[] = [...history, {
            type: 'command',
            content: cmd,
            prefix: `${CONFIG.username}@${CONFIG.hostname}:~$`
        }];
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
                        <p>Groups: sudo, docker, k8s-admin</p>
                        <p>Shell: /bin/zsh</p>
                    </div>
                );
                break;

            case 'uptime':
                output = (
                    <div>
                        <p> 10:00:00 up 999 days, 24 users, load average: 0.00, 0.01, 0.05</p>
                        <p>System is healthy.</p>
                    </div>
                );
                break;

            case 'stack':
                output = (
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold underline mb-1" style={{ color: CONFIG.colors.link }}>Compute & Orchestration</p>
                            <p className="text-sm">Kubernetes, Docker, AWS EC2/EKS, Lambda</p>
                        </div>
                        <div>
                            <p className="font-bold underline mb-1" style={{ color: CONFIG.colors.link }}>IaC & CI/CD</p>
                            <p className="text-sm">Terraform, Ansible, Jenkins, GitHub Actions, ArgoCD</p>
                        </div>
                        <div>
                            <p className="font-bold underline mb-1" style={{ color: CONFIG.colors.link }}>Observability</p>
                            <p className="text-sm">Prometheus, Grafana, ELK Stack, Datadog</p>
                        </div>
                    </div>
                );
                break;

            case 'deploy':
                output = (
                    <div>
                        <p className="text-yellow-400">⚠ Initiating deployment sequence...</p>
                        <p>Loading configuration... <span className="text-green-400">Done</span></p>
                        <p>Connecting to cluster... <span className="text-green-400">Connected</span></p>
                        <p>Applying manifests... <span className="text-green-400">Applied</span></p>
                        <p className="mt-2 text-green-400 font-bold">✔ Deployment successful! Application is live.</p>
                        <p className="text-xs opacity-50 mt-1">(This is a simulation. No actual infrastructure was harmed.)</p>
                    </div>
                );
                break;
            case 'about':
            case 'projects':
            case 'contact':
                output = (
                    <div>
                        <p>This command has been deprecated in v2.0.</p>
                        <p>Please use <span style={{ color: CONFIG.colors.commands }}>'stack'</span> or <span style={{ color: CONFIG.colors.commands }}>'help'</span> to explore.</p>
                    </div>
                );
                break;

            case 'clear':
                setHistory([]);
                return; // Early return to avoid adding "clear" output

            case '':
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
        </div>
    );
};

export default Terminal;
