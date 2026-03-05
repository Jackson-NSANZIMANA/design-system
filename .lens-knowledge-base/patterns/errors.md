# Errors

Errors occur after someone has taken an action and our product fails. Clear feedback to users increases their trust and engagement in our products.

Clearly communicate:

- **Where** it happened  
- **What** happened  
- **When** it happened  
- **Why** it happened  
- **What someone can do next**

---

# Guidelines

- Clearly communicate what happened. If we know what happened, tell the customer.
- Represent the **highest severity error first**, and display errors in **descending severity order**.
- When possible, **use proximity** to address errors where they occur.
- Always present an **action or next step** to the user (refresh, retry later, contact support, etc.).
- Preserve as much of someone’s **input** as possible.

---

# Do Use

- Inline field errors
- NotificationBar
- Full page takeovers

# Don't Use

- **Modals** to display errors. Most errors shouldn’t block the rest of the page.
- **App notifications**. Most errors should appear where the user encounters them.
- **Toasts**. These are used for confirming successful actions.

---

# Determining Error Types

What is the **scope and impact** of the error?

- Is something preventing the user from taking action?
- Is a specific screen or feature failing?

Error types depend on:

- **User control**
- **Severity of the issue**

---

# Guidance for Error Patterns

| Level | Guidance | Example |
|------|---------|--------|
| High severity | Use more of the screen, including full takeover experiences | Loom.com is down |
| Low severity | Use less of the screen; place the error inline with the problem | A form is incomplete |
| High user control | Provide direct guidance to users about what to do next | Unsupported browser |
| Low user control | Explain why the error occurred and next steps | Trying to view a private video |

---

# Common Error Types

---

# Incorrect Inputs

**High user control, Low severity**

If someone submits information in a format the system cannot accept, label the element with an **error state** and provide clear messaging on the appropriate format.

## Examples

- Exceeds character count → Show the character count
- Unsupported characters → Show accepted symbols
- Incomplete form → Highlight missing fields

## Dos

- Tell the user the appropriate format **before or during input**.
- Mark **required fields** clearly.
- Use a **banner** when multiple errors appear in a form.

## Don'ts

- Simply tell users their input is invalid.
- Trigger a **general page-level error**.

Example:

General page-level error with a large red **NotificationBar** across the top displaying:

> Failed to load comment

Related components:

- Form error states  
- NotificationBar

---

# Permissions Restrict Content

**Low User Control, Low Severity**

Occurs when a user tries to access a page or video they do not have permission to view.

## Example

- A **Viewer** tries to access a **private video** created by a **Creator**

## Do

- Tell them the content is **restricted**
- Show which **account** is attempting access

## Don't

- Say the content is simply **“unavailable”** (unless required for security reasons)

---

# Admin / Service Unavailable

**Low User Control, High Severity**

When the entire application becomes unavailable, avoid showing partially broken components. Replace the page with a clear message.

## Examples

- Loom app is down (**503**)
- Broken link (**401/403**)
- Page not found (**404**)

Example messages:

**401/403 error page**

> This Loom has been deleted or archived.

With a button:

> Return to homepage

**404 error page**

> You weren't supposed to see this.

With links to:

- Library
- System status

## Do

- Explain **what went wrong**
- Provide **next steps** such as:
  - Troubleshooting steps
  - Visiting `loomstatus.com`
  - Accessing the help center

## Don't

- Use **generic error messages**

---

# Internet Connection Interrupted

**High User Control, Low Severity**

Occurs when the user's internet connection causes the issue.

## Examples

- Recording a Loom but losing connection
- Posting a comment while offline

## Dos

- Preserve the user’s **input or content**
- Reassure users the content will **sync once reconnected**

## Don'ts

- Tell them something is **“unavailable”**

---

# Feature Fails to Load

**Low User Control, Low Severity**

The rest of the page works, but one feature fails to load.

Place the error **as close as possible** to the affected feature.

## Example

Engagement insights fails to load → show a message inside the component.

Example UI:

Comments panel shows:

- “View data failed to load”
- Button: **Refresh**

## Dos

- Offer a **local reload action**

## Don'ts

- Disable other features unnecessarily
- Crash the entire page

---

# Unsupported Browser

**High User Control, High Severity**

Occurs when a user attempts to use Loom on an unsupported browser.

## Example

The supported browsers page shows:

- The **user’s current browser**
- Supported browsers list
- Button to **contact support**

## Dos

- Clearly explain what the user must do to access Loom.
- Link to the **supported browsers policy**.
- Detect and display the **user's current browser version**.
- Send this information automatically if they contact support.

## Don'ts

- Tell users the site is **broken**

---

# Further Reading

## Troubleshooting as a User

Whenever possible, provide a **clear path forward**.

Examples include:

- Linking to a relevant **support article**
- Showing a specific **error code**
- Redirecting users to **loomstatus**
- Providing a way to **contact support**

**Note:**  
When sending users to support, include as much **context and error data** as possible so the support team can efficiently troubleshoot.

Example:

The supported browsers page shows:

- The user's browser version
- Supported browsers
- A contact support button that includes diagnostic data

---

# Displaying Feedback to the User

## W3: Listing Errors

When displaying multiple errors:

- Show the **highest severity error first**
- Display errors in **descending severity order**

### Example Error Order

1. No connection  
2. Loom is down  
3. Issue with a user’s account  
4. Access is restricted  
5. Feature fails to render  
6. Invalid input registered