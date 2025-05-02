curl -X POST https://atividade-iv-v1-full-stack-six.vercel.app/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "invalid-email",
    "password": "password123"
  }'
