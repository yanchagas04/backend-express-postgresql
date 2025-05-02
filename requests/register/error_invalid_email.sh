curl -X POST https://atividade-iv-v1-full-stack-six.vercel.app/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "invalid-email",
    "password": "password123"
  }'
