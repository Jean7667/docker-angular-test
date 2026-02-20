import subprocess
import os

def start_dev():
    # 1. Absolute path to the front-end directory
    # This is the directory shown in your screenshot
    frontend_dir = os.path.dirname(os.path.abspath(__file__))
    image_name = "angular-new-dev:v1"

    print(f"🚀 Mapping Workspace: {frontend_dir}")

    # 2. The Command
    # We use -w /app to force the working directory inside the container
    docker_cmd = [
        "docker", "run", "-it", "--rm",
        "-p", "4200:4200",
        "-v", f"{frontend_dir}:/app",      # Direct map: local files -> /app
        "-v", "/app/node_modules",         # Anonymous volume for container modules
        "-w", "/app",                      # Force Working Directory
        image_name,
        "ng", "serve", "--host", "0.0.0.0", "--poll", "2000"
    ]

    try:
        subprocess.run(docker_cmd, check=True)
    except subprocess.CalledProcessError as e:
        print(f"❌ Error starting container: {e}")

if __name__ == "__main__":
    start_dev()
