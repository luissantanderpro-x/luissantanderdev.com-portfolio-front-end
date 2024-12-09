# My Remote Server Backend 
FROM ubuntu:24.04

# Set noninteractive mode for apt-get to avoid prompts
ENV DEBIAN_FRONTEND=noninteractive

RUN useradd -m luissantanderdev

WORKDIR /home/luissantanderdev

COPY . .

# Update and install necessary packages
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \ 
    bash \
    curl \
    vim \
    nano \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN npm install

USER luissantanderdev

EXPOSE 3000

# Set the default command
CMD ["bash"]
