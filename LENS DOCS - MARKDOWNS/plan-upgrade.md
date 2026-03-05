# Plan Upgrade

---

# Colors

Plan upgrade components use **upgrade colors**.

| Token             | Usage                                                            |
| ----------------- | ---------------------------------------------------------------- |
| **upgrade**       | `--lns-color-upgrade hsla(277.5, 89%, 96.5%, 1) #f8eefe `        |
| **upgradeHover**  | `--lns-color-upgradeHover hsla(277, 86%, 91.6%, 1) #eed7fc `     |
| **upgradeActive** | `--lns-color-upgradeActive hsla(278.6, 84.5%, 79.8%, 1) #d8a0f7` |

See **Colors**.

---

# Upgrade Icon

### Example

```jsx
<Icon icon={<SvgEditions />} />
<Icon icon={<SvgEditions />} />
```

---

# Upgrade Components

---

# Pill

Example:

### Example

```jsx
<Pill
  icon={<SvgEditions />}
  color="discoveryTitle"
  backgroundColor="upgrade"
>
  Upgrade
</Pill>

<Pill
  icon={<SvgEditions />}
  color="discoveryTitle"
  backgroundColor="upgrade"
>
  Upgrade
</Pill>
```

---

# Button

See all **Button options**.

Example:

### Example

```jsx
<Arrange gap="medium">
  <Button variant="upgrade" icon={<SvgEditions />}>
    Upgrade
  </Button>

  <Button
    variant="upgrade"
    icon={<SvgEditions />}
    size="large"
  >
    Upgrade
  </Button>
</Arrange>

<Arrange gap="medium">
  <Button variant="upgrade" icon={<SvgEditions />}>
    Upgrade
  </Button>

  <Button
    variant="upgrade"
    icon={<SvgEditions />}
    size="large"
  >
    Upgrade
  </Button>
</Arrange>
```

---

# Tooltip

See all **Tooltip options**.

Example triggers:

- **Hover me (rich content)**
- **Hover me**

### Example

```jsx
<>
  <Tooltip
    placement="bottomCenter"
    maxWidth={36}
    content={
      <div>
        <Arrange gap="small" columns={['1fr', 'auto']}>
          <Text fontWeight="bold">Main title</Text>

          <Arrange gap="xsmall">
            <Icon icon={<SvgEditions />} size={2} color="upgradeActive"/>
            <Text fontWeight="bold" color="upgradeActive">
              Upgrade
            </Text>
          </Arrange>
        </Arrange>

        <Spacer top="small">
          <Text>{demoText.medium}</Text>
        </Spacer>
      </div>
    }
  >
    <Text isInline>
      Hover me (rich content)
    </Text>
  </Tooltip>

  {' | '}

  <Tooltip
    placement="bottomCenter"
    maxWidth={36}
    content={
      <Text>
        This feature is only available with an <strong>Enterprise plan</strong>. Click to upgrade.
      </Text>
    }
  >
    <Text isInline>
      Hover me
    </Text>
  </Tooltip>
</>

<>
  <Tooltip
    placement="bottomCenter"
    maxWidth={36}
    content={
      <div>
        <Arrange gap="small" columns={['1fr', 'auto']}>
          <Text fontWeight="bold">Main title</Text>

          <Arrange gap="xsmall">
            <Icon icon={<SvgEditions />} size={2} color="upgradeActive"/>
            <Text fontWeight="bold" color="upgradeActive">
              Upgrade
            </Text>
          </Arrange>
        </Arrange>

        <Spacer top="small">
          <Text>{demoText.medium}</Text>
        </Spacer>
      </div>
    }
  >
    <Text isInline>
      Hover me (rich content)
    </Text>
  </Tooltip>

  {' | '}

  <Tooltip
    placement="bottomCenter"
    maxWidth={36}
    content={
      <Text>
        This feature is only available with an <strong>Enterprise plan</strong>. Click to upgrade.
      </Text>
    }
  >
    <Text isInline>
      Hover me
    </Text>
  </Tooltip>
</>
```

---

# TooltipBox

You can also use **TooltipBox** for custom behavior.

### Example

```
Main title
Upgrade

Clouds is focused on the realtime granularization of incoming audio signals, and their transformation into amorphous textures.
```

---

# Dropdown

See all **Dropdown options**.

### Example

```jsx
<Dropdown
  trigger={<Button>Trigger</Button>}
  options={[
    { title: 'Share' },
    { title: 'Archive' },
    {
      onClick: () => alert('Upgrading'),
      title: (
        <Arrange columns={['1fr', 'auto']} gap="medium">
          <Text color="disabledContent">
            Invite
          </Text>

          <Pill
            icon={<SvgEditions />}
            color="discoveryTitle"
            backgroundColor="upgrade"
          >
            Upgrade
          </Pill>
        </Arrange>
      )
    },
  ]}
/>

<Dropdown
  trigger={<Button>Trigger</Button>}
  options={[
    { title: 'Share' },
    { title: 'Archive' },
    {
      onClick: () => alert('Upgrading'),
      title: (
        <Arrange columns={['1fr', 'auto']} gap="medium">
          <Text color="disabledContent">
            Invite
          </Text>

          <Pill
            icon={<SvgEditions />}
            color="discoveryTitle"
            backgroundColor="upgrade"
          >
            Upgrade
          </Pill>
        </Arrange>
      )
    },
  ]}
/>
```

---

# Select

See all **Select options**.

Example placeholder:

**Choose an option**

### Example

```jsx
<Select
  placeholder="Choose an option"
  options={[
    { value: 'fullScreen', title: 'Full screen' },
    { value: 'window', title: 'Window' },
    {
      value: 'customSize',
      title: (
        <Tooltip
          isInline={false}
          placement="bottomRight"
          maxWidth={36}
          content={
            <Text>
              This feature is only available with an
              <Text fontWeight="bold" isInline>
                Enterprise plan
              </Text>.
              Click to upgrade.
            </Text>
          }
        >
          <Arrange columns={['1fr', 'auto']} gap="medium">
            <Text color="disabledContent">
              Invite
            </Text>

            <Pill
              icon={<SvgEditions />}
              color="discoveryTitle"
              backgroundColor="upgrade"
            >
              Upgrade
            </Pill>
          </Arrange>
        </Tooltip>
      )
    },
  ]}
/>

<Select
  placeholder="Choose an option"
  options={[
    { value: 'fullScreen', title: 'Full screen' },
    { value: 'window', title: 'Window' },
    {
      value: 'customSize',
      title: (
        <Tooltip
          isInline={false}
          placement="bottomRight"
          maxWidth={36}
          content={
            <Text>
              This feature is only available with an
              <Text fontWeight="bold" isInline>
                Enterprise plan
              </Text>.
              Click to upgrade.
            </Text>
          }
        >
          <Arrange columns={['1fr', 'auto']} gap="medium">
            <Text color="disabledContent">
              Invite
            </Text>

            <Pill
              icon={<SvgEditions />}
              color="discoveryTitle"
              backgroundColor="upgrade"
            >
              Upgrade
            </Pill>
          </Arrange>
        </Tooltip>
      )
    },
  ]}
/>
```
