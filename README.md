# TODO
- Session expiration
- Multiple browser redirect on session invalidation
- Add remember-me function
- Add token in interceptor

# Build and Run
ng build --prod
docker build --tag nikkinicholasromero/angular-session-demo .
docker push nikkinicholasromero/angular-session-demo
docker run --name angular-session-demo-container -d -p 80:80 nikkinicholasromero/angular-session-demo
