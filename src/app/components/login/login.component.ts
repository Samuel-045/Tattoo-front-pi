import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importe o módulo HttpClientModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  cpf: string = '';
  senha: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  formatCPF(event: KeyboardEvent): void {
    let value = this.cpf.replace(/\D/g, '');

    if (value.length > 3) {
      value = value.substring(0, 3) + '.' + value.substring(3);
    }
    if (value.length > 7) {
      value = value.substring(0, 7) + '.' + value.substring(7);
    }
    if (value.length > 11) {
      value = value.substring(0, 11) + '-' + value.substring(11);
    }
    this.cpf = value.substring(0, 14);
  }

  logar() {
    const body = {
      cpf: this.cpf,
      senha: this.senha
    };

    
  
    console.log("Enviando dados:", body); // Verifique os dados que estão sendo enviados
  
    this.http.post('http://localhost:8080/login/l', body, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: (resp: any) => {
        console.log("Resposta recebida:", resp);
        if (resp) {
          this.router.navigate(['/estoque']);
        } else {
          alert("Cpf ou senha invalidos, por favor tente novamente.");
        }
      },
      error: (resp :any) => {
        console.error("Erro na requisição:", resp);
        alert(resp.error?.erro || "Cpf ou senha invalidos, por favor tente novamente.");
      }
    });
  }
}
