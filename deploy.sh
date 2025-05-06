pnpm i
pnpm build
pnpm i --prod

docker stop words-learning-app
docker rm words-learning-app
docker rmi words-learning-image

docker build --platform linux/amd64 -t words-learning-image .
docker run --name words-learning-app -p 3001:3001 -d words-learning-image

sleep 3
open http://localhost:3001