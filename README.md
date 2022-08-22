**Install all packages**

```
pip3 install -r requirements.txt
```

**Run the application and API**

```
python -m backend.app
```

**Run a peer instance**

```
export PEER=True && python -m backend.app
```

**Run the frontend**

In the frontend directory:

```
npm run start
```

**Seed the backend with data**

```
export SEED_DATA=True && python -m backend.app
```
