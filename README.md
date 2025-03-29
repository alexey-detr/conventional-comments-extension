# Conventional Comments Extension

This project is a browser extension that enhances the commenting experience by adding conventional comment prefixes to comment fields. It allows users to quickly insert structured prefixes like `praise:`, `nitpick:`, `suggestion:`, and more into their comments.

## Features

- Adds a toolbar with conventional comment prefixes to comment fields.
- Automatically formats comments with the selected prefix.
- Supports prefixes such as:
  - `praise`
  - `nitpick`
  - `suggestion`
  - `issue`
  - `todo`
  - `question`
  - `thought`
  - `chore`
  - `note`

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/conventional-comments-extension.git
   ```
2. Open your browser's extensions page:
   - For Chrome: Go to `chrome://extensions/`
   - For Firefox: Go to `about:debugging#/runtime/this-firefox`
3. Enable "Developer mode" or "Debugging mode."
4. Click "Load unpacked" or "Load Temporary Add-on" and select the project folder.

## Usage

1. Navigate to a page with comment fields (e.g., a code review platform).
2. When a comment field is detected, a toolbar with conventional comment prefixes will appear.
3. Click on a prefix (e.g., `suggestion:`) to insert it into the comment field.
4. Edit your comment as needed and submit it.

## Development

To contribute or modify the extension:

1. Install dependencies (if applicable):
   ```bash
   npm install
   ```
2. Make changes to the source code in the `src` directory.
3. Reload the extension in your browser to see the changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Inspired by the [Conventional Comments](https://conventionalcomments.org/) initiative to improve code review communication.
