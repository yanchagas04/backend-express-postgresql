# Backend Express MongoDB - Atividade IV v2

Este é um projeto backend construído com Node.js, Express e PostgreSQL, fornecendo autenticação básica via token JWT e rotas protegidas.

# Tecnologias Utilizadas

<div align="center" style="display: flex; justify-content: center; align-items: center; gap: 40px; margin: 20px 0;">
  <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*9oOlDJKiLq1KhGoOivv51A.png" alt="Node.js" height="60" style="height: 120px; object-fit: contain;">
  <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*iNVrmliw1DH1O3Wx2m_ggA.gif" alt="PostgreSQL" height="60" style="height: 80px; object-fit: contain;">
  <img src="https://jwt.io/img/logo-asset.svg" alt="JWT" height="60" style="height: 80px; object-fit: contain;">
</div>

## Rotas

### Autenticação

#### `[POST] /users/login`
- Gera um token JWT para acessar a área protegida via autenticação.

**Parâmetros (body):**
```json
{
    "email": "string",
    "password": "string"
}
```

#### `[POST] /users/register`
- Cadastra um novo usuário dentro do banco de dados salvando sua senha em hash.

**Parâmetros (body):**
```json
{
    "name": "string",
    "email": "string",
    "password": "string"
}
```

#### `[GET] /protected`
- Acessa a área a área protegida.

## Vídeo Explicativo

[Vídeo Exemplo](https://youtu.be/l-C_cmEI468)
