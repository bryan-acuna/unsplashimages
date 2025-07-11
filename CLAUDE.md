# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a React TypeScript starter project configured with Vite as the build tool and bundler. It's designed for use in Stephen Grider's Udemy courses and provides a modern React development environment with TypeScript support.

## Development Commands
- `npm start` - Start development server on port 3000
- `npm run build` - Build production bundle with TypeScript compilation
- `npm run lint` - Run ESLint for code quality checks (supports TypeScript)
- `npm run preview` - Preview production build locally

## Architecture Notes
- **Build Tool**: Vite with TypeScript support
- **React Version**: 19.0.0 with automatic JSX runtime
- **TypeScript**: Configured with strict mode and modern ES features
- **Entry Point**: `src/index.tsx` renders the main `App` component
- **Type Definitions**: Includes Vite environment types and SVG module declarations

## Key Configuration Details
- Development server runs on port 3000
- TypeScript configuration uses strict mode with modern ES2020 target
- ESLint is configured with both React and TypeScript-specific rules
- Source files use `.tsx` extensions for TypeScript + JSX
- Type declarations for SVG imports and Vite environment are included

#Tasks
1.think read codebase and write a plan 
2.list of todos that check as you finish
3.before you execute, check in with me to verify
4.Begin working on todo items, marking them complete as you go 
5.explain every step tell me high level explanation of what you are doing and why 
