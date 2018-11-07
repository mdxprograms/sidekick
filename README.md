# sidekick
Javascript utility library for drop-in use

### CDN
https://unpkg.com/@mdxprograms/sidekick@2.2.0/sidekick.min.js

### Docs

- Event
  ```yaml
  - params:
    - elWithEvt: String
    - data: Any
    
  - description: >
    Returns and creates a new CustomEvent
  ```
  **Usage**
  ```javascript
  function addItem(text) {
    kick.event(".nav:addItem", { text: text });
  }
  ```
