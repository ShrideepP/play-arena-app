# Use Bun 1.1.0 official image
FROM oven/bun:1.1.0 as base

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lockb ./
RUN bun install

# Copy source files
COPY . .

# Build TypeScript code to dist/
RUN bun run build

# Final stage: smaller image
FROM oven/bun:1.1.0 as final

WORKDIR /app

# Copy built files and dependencies
COPY --from=base /app /app

# Expose port (adjust if your app uses a different one)
EXPOSE 3000

# Load environment variables if needed
ENV NODE_ENV=production

# Start app
CMD ["bun", "run", "dist/src/index.js"]
