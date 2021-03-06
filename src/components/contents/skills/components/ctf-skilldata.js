const ctfSkillDataAll = [
    {
        "category": "Rev (I love it!)",
        "bgColor": "#004000",
        "skills": [
            {
                "skill": "Analysing x86, x86_64 assembly",
                "detail": [
                    "Mainly by IDA freeware and gdb-peda",
                    "Basic usage of Ghidra",
                    "dynamic analysis with gdb-peda and angr"
                ]
            },
            {
                "skill": "Analysing PE and DLLs",
                "detail": [
                    "Memory analysis and debugging using x32/x64dbg",
                    "Read and modify C#.NET code by dnSpy",
                    "Memory analysis using CheatEngine"
                ]
            },
            {
                "skill": "Reversing APK",
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
                    "ROP stager with mmap() or mprotect()"
                ]
            },
            {
                "skill": "Basic Format String Attack",
                "detail": []
            },
        ]
    },
    {
        "category": "web",
        "bgColor": "#000040",
        "skills": [
            {
                "skill": "Read JS code, (a little bit) PHP code",
                "detail": [
                    "Analysis of obfuscated JS codes using developer tool."
                ]
            },
            {
                "skill": "Basic XSS",
                "detail": [
                    "Basic stored XSS",
                    "Basic reflected XSS",
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
                    "Basic usage of CSRF token",
                    "Basic CSRF token bypass by XSS"
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
                "skill": "Basic usage of some tools (e.g. volatility framework)",
                "detail": [
                ]
            }
        ]
    },
    {
        "category": "Crypto",
        "bgColor": "#402020",
        "skills": [
            {
                "skill": "Basic usage of OpenSSL",
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
            },
            {
                "skill": "Basic elementary number theory, group theory, ring theory",
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