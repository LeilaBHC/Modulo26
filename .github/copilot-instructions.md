# Modulo - AI Coding Agent Instructions

## Project Overview
Modulo is an educational platform for teaching computer science in Swiss high schools (Gymnase). It provides interactive resources for students (apprendre.modulo-info.ch) and teachers (enseigner.modulo-info.ch), covering topics from information representation to programming projects.

## Architecture
- **Documentation System**: Sphinx-based with MyST parser for Markdown content
- **Interactive Plugins**: Custom Sphinx extensions for circuit simulation (`logic`), Python coding environment (`codeplay`), exercises, and multimedia
- **Content Structure**: Student content in `src/appr/` (chapters: rep-info, archi, algo1, prog1, resx, algo2, prog2, projets, hist)
- **Landing Page**: Separate Gatsby/React site in `landing-page/`
- **Deployment**: Custom scripts in `deployment/` for server upload

## Key Workflows
- **Build HTML**: `make web` (runs `sphinx-build -aE -b html src/appr build/appr`)
- **Build PDF/Print**: `make print` (requires Playwright for Chromium)
- **Development**: Use `sphinx-autobuild` for live reloading during content editing
- **Deployment**: Run `deployment/deploy-helper` script for production uploads

## Coding Conventions
- **Language**: Primarily French (content, comments, documentation)
- **Content Format**: MyST-flavored Markdown with custom directives
  - `{logic}` for circuit editors (JSON5 circuit definitions)
  - `{codeplay}` for Python code playgrounds
  - `{exercise}` for interactive exercises
- **File Structure**: Content in `src/appr/web/` and subdirs, static assets in `src/appr/static/`
- **Extensions**: Custom plugins in `src/exts/` (e.g., `logic.py`, `codeplay.py`)
- **Glossary**: Centralized terms in `src/glossaire.csv`

## Integration Points
- **External Dependencies**: Logic simulator from https://logic.modulo-info.ch, Skulpt for Python execution
- **Cross-Component**: Landing page links to main docs; docs reference external tools
- **Multimedia**: Videos, images stored in `src/appr/media/`, referenced via custom `videos` extension

## Examples
- Circuit inclusion: `{logic} :height: 235 :mode: full` followed by JSON5 circuit object
- Code playground: `{codeplay} exec` for auto-executing Python editor
- Exercise directive: `{exercise}` with question/answer blocks

Focus on maintaining French language consistency and leveraging Sphinx's extensibility for educational interactivity.