import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleSignatureService {
  logSignature() {
    console.log(
      `%c
██╗  ██╗ █████╗ ██╗     ██████╗  ██████╗ ██╗     ██╗██████╗
╚██╗██╔╝██╔══██╗██║     ██╔══██╗██╔═══██╗██║    ███║╚════██╗
 ╚███╔╝ ███████║██║     ██████╔╝██║   ██║██║    ╚██║ █████╔╝
 ██╔██╗ ██╔══██║██║     ██╔═══╝ ██║   ██║██║     ██║██╔═══╝
██╔╝ ██╗██║  ██║███████╗██║     ╚██████╔╝███████╗██║███████╗
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝      ╚═════╝ ╚══════╝╚═╝╚══════╝
for more projects check out my github: https://github.com/xalpol12
`,
      'font-family: monospace; color: #A6E3A1; font-size: 12px;'
    );
  }
}
