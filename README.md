# koa-hello-world
after years of working with express, I've tried to experiment with koa a little.

### main assumptions I'm trying to prove:
- [x] moving from express to koa is simple
- [x] koa provides some sort of routing solution similar to express
- [x] koa can work with promises OOTB
- [x] simplicity of error handlers


### Conclusions regarding initial assumptions:
- [x] moving from express to koa is simple

the api is almost identical and very easy to adjust to ctx is basically req & res together (and many many more)

- [x] koa provides some sort of routing solution similar to express

not like express, koa's router is a seperate package (`koa-router`), but the integration is quite similar.
due to the simplicity of the API and the "allowed methods" option, you are getting OOTB status code errors
creating infinitely nested routes is no issue at all

- [x] koa can work with promises OOTB

even if we throw errors, koa's api allows us to work with promises with quite an ease,
no mumbo jumbo wrappers liek we used to do in express

- [x] simplicity of error handlers
there are 2 ways to address this:
- imperatively: api is identical to express (`.statusCode(400)`)
- decleratively: koa provides a lot of declerative error handling without making things complicated. (e.g: allowed methods)
