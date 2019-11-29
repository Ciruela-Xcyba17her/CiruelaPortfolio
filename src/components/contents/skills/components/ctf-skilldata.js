const ctfSkillDataAll = [
    {
        "category": "Rev (I love it!)",
        "bgColor": "#004000",
        "skills": [
            {
                "skill": "Analysing x86, x86_64 assembly",
                "detail": [
                    "IDA freeware and gdb-peda",
                    "Basical use of Ghidra"
                ]
            },
            {
                "skill": "Analysing PE and DLLs",
                "detail": [
                    "Memory analysis and debugging using x32/x64dbg",
                    "Read and modify C# code using dnSpy",
                    "Memory analysis using CheatEngine"
                ]
            },
            {
                "skill": "Analysing APK",
                "detail": [
                    "Reading Java code",
                    "Rewriting .smali files"
                ]
            }
        ]
    },
    {
        "category": "Pwn",
        "bgColor": "#600000",
        "skills": [
            {
                "skill": "Interaction with remote server with Python3",
                "detail": []
            },
            {
                "skill": "Basic Return Oriented Programming",
                "detail": [
                    "ret2libc",
                    "ROP stager with mmap() and mprotect()"
                ]
            },
            {
                "skill": "Basic Format String Attack",
                "detail": []
            },
            {
                "skill": "Basic Use-After-Free",
                "detail": []
            }
        ]
    },
    {
        "category": "web",
        "bgColor": "#000040",
        "skills": [
            {
                "skill": "Read JS code, (a bit) PHP code",
                "detail": [
                    "Basic JS deobfuscation using developer tool"
                ]
            },
            {
                "skill": "Dictionary attack",
                "detail": []
            },
            {
                "skill": "Basic XSS",
                "detail": [
                    "Basic Stored XSS",
                    "Basic Reflected XSS",
                    "Sanitising inputs"
                ]
            },
            {
                "skill": "Basic SQLi",
                "detail": [
                    "Union-based SQLi",
                    "Error-based SQLi"
                ]
            },
            {
                "skill": "CSRF",
                "detail": [
                    "Basical use of CSRF token",
                    "Basic CSRF token bypass"
                ]
            },
            {
                "skill": "Basic CSP bypass",
                "detail": []
            }
        ]
    },
    {
        "category": "Forensics",
        "bgColor": "#404000",
        "skills": [
            {
                "skill": "Basical use of some tools",
                "detail": [
                    "Volatility framework",
                    "TestDisk",
                    "UserAssist",
                    "Hash List Manager",
                    "FTK imager",
                    "Event Log Explorer",
                    "Some tools of Sysinternals Suite",
                    "NTFS Log Tracker",
                    "Fakenet"
                ]
            }
        ]
    },
    {
        "category": "Crypto",
        "bgColor": "#402020",
        "skills": [
            {
                "skill": "Basical use of OpenSSL",
                "detail": []
            },
            {
                "skill": "RSA",
                "detail": [
                    "Common modulus attack",
                    "Low public exponent attack",
                    "Multi-prime RSA",
                    "Wiener's attack"
                ]
            },
            {
                "skill": "AES",
                "detail": [
                    "ECB mode",
                    "OFB mode"
                ]
            },
            {
                "skill": "Known-plaintext attack",
                "detail": []
            },
            {
                "skill": "Paillier encryption/decryption",
                "detail": []
            }
        ]
    },
    {
        "category": "Network",
        "bgColor": "#006080",
        "skills": [
            {
                "skill": "Basical packet and network analysis",
                "detail": [
                    "Wireshark",
                    "scapy",
                    "tcpdump",
                    "dig (DNS)",
                    "nmap"
                ]
            }
        ]
    }
]

export default ctfSkillDataAll;