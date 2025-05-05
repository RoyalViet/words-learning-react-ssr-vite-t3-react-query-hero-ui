pnpm i
pnpm build
pnpm i --prod

docker stop wordsTranslation-app
docker rm wordsTranslation-app
docker rmi wordsTranslation-image

docker build --platform linux/amd64 -t wordsTranslation-image .
docker run --name wordsTranslation-app -p 3001:3001 -d wordsTranslation-image

sleep 3
open http://localhost:3001