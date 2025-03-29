#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';

// Read package.json to get the current version
const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));

// Read the existing manifest.json
const manifestPath = 'src/manifest.json';
const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));

// Update manifest version
manifest.version = packageJson.version;

// Write the updated manifest back to file
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log('Manifest updated to version ' + packageJson.version);
