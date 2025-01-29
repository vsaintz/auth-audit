import fastapi from FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import router

app = FastAPI()

app.add_middleware (
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # origin during development
    allow_credentials=True, # allow cookies/authentication headers
    allow_methods=["*"], # allow all http methods
    allow_headers=["*"], # allow all headers
)

@app.get("/")
async def read_root():
    return {"message": "Hello, FastAPI!"}


app.include_router(router)
