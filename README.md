# TODO
- Session expiration
- Multiple browser redirect on session invalidation
- Add remember-me function
- Add token in interceptor

# Build and Run
ng build --prod
docker build -t angular-session-demo .
docker run --name angular-session-demo-container -d -p 80:80 angular-session-demo
