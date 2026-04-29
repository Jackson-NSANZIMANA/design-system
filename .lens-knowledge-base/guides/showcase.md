---
file: guides/showcase.md
role: Idiomatic Lens composition reference (agent + human)
lensVersion: 12.14.0
answers: "What does correct, idiomatic Lens composition look like?"
load-when:
  - Building a new UI pattern
  - Verifying a composition is idiomatic
  - Seeking a reference before generating a new component
do-not-load-when:
  - Looking up a specific component API (use components/<Name>.md)
  - Looking up token values (use tokens/)
lastValidated: 2026-04-29
ci: Every code fence in this file must pass docs-verify.mjs
---

# Lens Showcase — Idiomatic Composition Examples

Every example here:
- Is production-ready and idiomatic Lens
- Uses only `@loomhq/lens` imports
- Uses only named token values (no hardcoded px/hex/rem)
- Uses `size="body-sm"` not deprecated `size="small"`
- Uses semantic color tokens (e.g. `color="bodyDimmed"` not `color="grey6"`)
- Passes ESLint + docs-verify CI

---

## 1. Comment Row

```tsx
import { Arrange, Icon, Text } from '@loomhq/lens'
import SvgComment from '@loomhq/lens/icons/comment'

export const CommentRow = ({ title, long }: { title: string; long: string }) => (
  <>
    <Arrange gap="small">
      <Icon icon={<SvgComment />} />
      <Text>{title}</Text>
    </Arrange>
    <Arrange gap="small">
      <Icon icon={<SvgComment />} />
      <Text hasEllipsis>{long}</Text>
    </Arrange>
  </>
)

```
---
## 2. User Comment Card
```tsx

import {
  Arrange,
  Avatar,
  Container,
  IconButton,
  Text,
} from '@loomhq/lens'
import SvgMoreHoriz from '@loomhq/lens/icons/more-horiz'

export const UserCommentCard = ({
  name,
  comment,
}: {
  name: string
  comment: string
}) => (
  <Container
    maxWidth={35}
    borderSide="all"
    padding="medium"
    radius="medium"
    shadow="small"
  >
    <Arrange gap="medium" columns={['auto', '1fr', 'auto']}>
      <Avatar name={name} letter={name[0]} />
      <Container minWidth={0}>
        <Text fontWeight="bold">{name}</Text>
        <Text color="bodyDimmed" hasEllipsis>
          {comment}
        </Text>
      </Container>
      <IconButton icon={<SvgMoreHoriz />} altText="Options" />
    </Arrange>
  </Container>
)
```
---
## 3. Comment Card With Timestamp
```tsx

import {
  Arrange,
  Avatar,
  Container,
  IconButton,
  Spacer,
  Text,
} from '@loomhq/lens'
import SvgMoreHoriz from '@loomhq/lens/icons/more-horiz'

export const CommentCardWithTimestamp = ({
  name,
  comment,
  timestamp,
}: {
  name: string
  comment: string
  timestamp: string
}) => (
  <Container
    maxWidth={30}
    borderSide="all"
    padding="medium"
    radius="medium"
    shadow="small"
  >
    <Arrange gap="small" columns={['auto', '1fr', 'auto']}>
      <Avatar letter={name[0]} />
      <Text color="bodyDimmed" size="body-sm">
        {name}
      </Text>
      <IconButton icon={<SvgMoreHoriz />} altText="Options" />
    </Arrange>

    <Spacer top="small" bottom="small">
      <Text hasEllipsis ellipsisLines={2}>
        {comment}
      </Text>
    </Spacer>

    <Text color="bodyDimmed" size="body-sm">
      {timestamp}
    </Text>
  </Container>
)
```
---
## 4. Notifications Toggle Row
```tsx

import { Arrange, Container, Switch, Text } from '@loomhq/lens'

export const NotificationsToggle = () => (
  <Container
    maxWidth={35}
    borderSide="all"
    padding="medium"
    radius="medium"
    shadow="small"
  >
    <Arrange gap="medium" columns={['1fr', 'auto']}>
      <Text>Notifications</Text>
      <Switch />
    </Arrange>
  </Container>
)
```
---
## 5. Reaction Row Card
```tsx

import { Arrange, Avatar, Container, Icon, Text } from '@loomhq/lens'
import SvgComment from '@loomhq/lens/icons/comment'
import SvgSmile from '@loomhq/lens/icons/smile'

export const ReactionRow = ({ content }: { content: string }) => (
  <Container
    maxWidth={44}
    borderSide="all"
    padding="medium"
    radius="medium"
    shadow="small"
  >
    <Arrange gap="medium" columns={['auto', '1fr', 'auto']}>
      <Avatar letter="T" />
      <Text hasEllipsis>{content}</Text>
      <Arrange gap="small">
        <Arrange gap="xsmall">
          <Icon color="bodyDimmed" icon={<SvgSmile />} />
          <Text color="bodyDimmed">7</Text>
        </Arrange>
        <Arrange gap="xsmall">
          <Icon color="bodyDimmed" icon={<SvgComment />} />
          <Text color="bodyDimmed">2</Text>
        </Arrange>
      </Arrange>
    </Arrange>
  </Container>
)
```
---
## 6. Invite User Form
```tsx

import {
  Arrange,
  Button,
  Container,
  FormField,
  Select,
  TextInput,
} from '@loomhq/lens'

export const InviteUserForm = () => (
  <Container
    maxWidth={60}
    borderSide="all"
    padding="medium"
    radius="medium"
    shadow="small"
  >
    <Arrange gap="small" columns={['2fr', '1fr', 'auto']} alignItems="end">
      <FormField
        direction="column"
        label="Email"
        labelFor="invite-email"
      >
        <TextInput
          id="invite-email"
          placeholder="name@company.com"
        />
      </FormField>

      <FormField direction="column" label="Role">
        <Select
          selectedOptionValue="creator"
          options={[
            { value: 'creator', title: 'Creator' },
            { value: 'viewer', title: 'Viewer' },
          ]}
        />
      </FormField>

      <Button variant="primary">Add</Button>
    </Arrange>
  </Container>
)
```
---

## 7. Media Timestamp Link
```tsx

import { Arrange, Container, Link, Text } from '@loomhq/lens'

export const MediaTimestampLink = ({ timestamp, description }: {
  timestamp: string
  description: string
}) => (
  <Container
    padding="medium"
    radius="medium"
    borderSide="all"
    shadow="small"
    maxWidth={44}
  >
    <Arrange gap="medium" columns={['auto', '1fr']} alignItems="start">
      {/*
        Raw div wrapper used here only because <Link> requires
        a DOM node boundary for layout alignment.
        The wrapper does not replace a Lens layout component.
      */}
      <div>
        <Link>{timestamp}</Link>
      </div>
      <Text>{description}</Text>
    </Arrange>
  </Container>
)
```
---

## 8. Confirmation Card
```tsx

import {
  Arrange,
  Button,
  Container,
  Icon,
  Spacer,
  Text,
} from '@loomhq/lens'
import SvgLock from '@loomhq/lens/icons/lock'

export const ConfirmationCard = ({
  title,
  description,
  onCancel,
  onSave,
}: {
  title: string
  description: string
  onCancel: () => void
  onSave: () => void
}) => (
  <Container
    padding="large"
    radius="medium"
    borderSide="all"
    shadow="small"
    maxWidth={44}
  >
    <Arrange gap="xsmall" alignItems="start" columns={['auto', '1fr']}>
      <Icon icon={<SvgLock />} />
      <Text size="heading-sm" variant="title">
        {title}
      </Text>
    </Arrange>

    <Spacer top="small" bottom="medium">
      <Text color="bodyDimmed">{description}</Text>
    </Spacer>

    <Arrange gap="small" columns={['1fr', '1fr']}>
      <Button variant="neutral" onClick={onCancel}>
        Cancel
      </Button>
      <Button variant="primary" onClick={onSave}>
        Save
      </Button>
    </Arrange>
  </Container>
)
```
---

## 9. Toolbar With Bulk Actions
```tsx

import {
  Arrange,
  Container,
  IconButton,
  Split,
  SplitSection,
  Text,
  TextButton,
} from '@loomhq/lens'
import SvgArchive from '@loomhq/lens/icons/archive'
import SvgCopy from '@loomhq/lens/icons/copy'
import SvgDownload from '@loomhq/lens/icons/download'
import SvgFolder from '@loomhq/lens/icons/folder'

export const BulkActionToolbar = ({ onCancel }: { onCancel: () => void }) => (
  <Container
    paddingTop="small"
    paddingBottom="small"
    paddingLeft="medium"
    paddingRight="medium"
    radius="medium"
    borderSide="all"
    shadow="small"
    minWidth="min-content"
  >
    <Split gap="small" alignItems="center">
      <SplitSection grow={1} shrink={0}>
        <Text>Selected items</Text>
      </SplitSection>
      <SplitSection>
        <Arrange gap="xsmall">
          <IconButton icon={<SvgCopy />} altText="Copy" />
          <IconButton icon={<SvgFolder />} altText="Move to folder" />
          <IconButton icon={<SvgArchive />} altText="Archive" />
          <IconButton icon={<SvgDownload />} altText="Download" />
          <TextButton onClick={onCancel}>Cancel</TextButton>
        </Arrange>
      </SplitSection>
    </Split>
  </Container>
)
```
---
## 10. Responsive Banner
```tsx

import {
  Button,
  Container,
  Split,
  SplitSection,
  Text,
} from '@loomhq/lens'

export const ResponsiveBanner = ({
  message,
  onAction,
  onDismiss,
}: {
  message: string
  onAction: () => void
  onDismiss: () => void
}) => (
  <Container
    padding="medium"
    radius="medium"
    borderSide="all"
    shadow="small"
  >
    <Split gap="medium" alignItems="center">
      <SplitSection grow={1} basis={40}>
        <Text>{message}</Text>
      </SplitSection>
      <SplitSection>
        <Split gap="xsmall">
          <Button variant="primary" onClick={onAction}>
            Take action
          </Button>
          <Button variant="neutral" onClick={onDismiss}>
            Dismiss
          </Button>
        </Split>
      </SplitSection>
    </Split>
  </Container>
)
```
---
## 11. Search Results Panel
```tsx

import {
  Arrange,
  Container,
  Icon,
  IconButton,
  Text,
  TextButton,
  TextInput,
} from '@loomhq/lens'
import SvgClose from '@loomhq/lens/icons/close'
import SvgFolder from '@loomhq/lens/icons/folder'
import SvgPlay from '@loomhq/lens/icons/play'
import SvgSearch from '@loomhq/lens/icons/search'

export const SearchResultsPanel = ({
  onClear,
  onClose,
}: {
  onClear: () => void
  onClose: () => void
}) => (
  <Container
    radius="medium"
    borderSide="all"
    shadow="small"
    maxWidth={60}
  >
    {/* Search input row */}
    <Container padding="small">
      <Arrange gap="small" columns={['1fr', 'auto', 'auto']}>
        <TextInput
          placeholder="Search"
          icon={<SvgSearch />}
        />
        <TextButton onClick={onClear}>Clear</TextButton>
        <IconButton icon={<SvgClose />} altText="Close" onClick={onClose} />
      </Arrange>
    </Container>

    {/* Result row — video */}
    <Container
      paddingLeft="medium"
      paddingRight="medium"
      paddingTop="small"
      paddingBottom="small"
      borderSide="top"
    >
      <Arrange gap="medium" columns={['auto', '1fr']}>
        <Icon icon={<SvgPlay />} />
        <Container minWidth={0}>
          <Text hasEllipsis>Granularization of Incoming Signals</Text>
          <Arrange
            gap="xsmall"
            width="max-content"
            maxWidth="100%"
            columns="repeat(5, auto)"
          >
            <Text hasEllipsis color="bodyDimmed" size="body-sm">
              Shirai Hikaru
            </Text>
            <Text size="body-sm" color="bodyDimmed">·</Text>
            <Text size="body-sm" color="bodyDimmed">2:06</Text>
            <Text size="body-sm" color="bodyDimmed">·</Text>
            <Text size="body-sm" color="bodyDimmed">May 19, 2021</Text>
          </Arrange>
        </Container>
      </Arrange>
    </Container>

    {/* Result row — folder */}
    <Container
      paddingLeft="medium"
      paddingRight="medium"
      paddingTop="small"
      paddingBottom="small"
      borderSide="top"
    >
      <Arrange gap="medium" columns={['auto', '1fr']}>
        <Icon icon={<SvgFolder />} />
        <Container minWidth={0}>
          <Text hasEllipsis>My Project Folder</Text>
          <Arrange
            gap="xsmall"
            width="max-content"
            maxWidth="100%"
            columns="repeat(5, auto)"
          >
            <Text hasEllipsis color="bodyDimmed" size="body-sm">
              Shirai Hikaru
            </Text>
            <Text size="body-sm" color="bodyDimmed">·</Text>
            <Text size="body-sm" color="bodyDimmed">2:06</Text>
            <Text size="body-sm" color="bodyDimmed">·</Text>
            <Text size="body-sm" color="bodyDimmed">May 19, 2021</Text>
          </Arrange>
        </Container>
      </Arrange>
    </Container>
  </Container>
)
```
---
## 12. Responsive Pricing Cards
```tsx

import {
  Arrange,
  Button,
  Container,
  Icon,
  Spacer,
  Text,
} from '@loomhq/lens'
import SvgCheck from '@loomhq/lens/icons/check'

const FEATURES = [
  'Unlimited Creators',
  '100 videos & screenshots',
  '5 min recording length',
]

const PLANS = [
  {
    title: 'Starter',
    price: 'Free',
    variant: 'neutral' as const,
    isDisabled: true,
  },
  {
    title: 'Business',
    price: '$8',
    variant: 'primary' as const,
    isDisabled: false,
  },
  {
    title: 'Enterprise',
    price: '$1M',
    variant: 'neutral' as const,
    isDisabled: false,
  },
]

export const PricingCards = () => (
  <Arrange
    gap="small"
    columns="repeat(auto-fill, minmax(15rem, 1fr))"
  >
    {PLANS.map((plan) => (
      <Container
        key={plan.title}
        shadow="small"
        padding="large"
        radius="medium"
      >
        <Text size="heading-sm" fontWeight="bold">
          {plan.title}
        </Text>

        <Spacer bottom="small">
          <Text size="heading-md" fontWeight="bold">
            {plan.price}
          </Text>
        </Spacer>

        <Spacer top="small" bottom="medium">
          {FEATURES.map((feature) => (
            <Arrange
              key={feature}
              gap="xsmall"
              columns={['auto', '1fr']}
            >
              <Icon icon={<SvgCheck />} />
              <Text>{feature}</Text>
            </Arrange>
          ))}
        </Spacer>

        <Button
          isDisabled={plan.isDisabled}
          variant={plan.variant}
          width="full"
        >
          Upgrade
        </Button>
      </Container>
    ))}
  </Arrange>
)
```
---
## 13. Responsive Card List
```tsx

import {
  Arrange,
  Avatar,
  Container,
  IconButton,
  Text,
} from '@loomhq/lens'
import SvgMoreHoriz from '@loomhq/lens/icons/more-horiz'

export const ResponsiveCardList = ({
  items,
}: {
  items: { id: string; name: string; role: string }[]
}) => (
  <Arrange
    gap="small"
    columns="repeat(auto-fill, minmax(min(100%, 15rem), 1fr))"
  >
    {items.map((item) => (
      <Container
        key={item.id}
        borderSide="all"
        padding="medium"
        radius="medium"
      >
        <Arrange gap="small" columns={['auto', '1fr', 'auto']}>
          <Avatar letter={item.name[0]} />
          <Text color="bodyDimmed" size="body-sm">
            {item.name}
          </Text>
          <IconButton
            icon={<SvgMoreHoriz />}
            altText="Options"
          />
        </Arrange>
      </Container>
    ))}
  </Arrange>
)
```
---

## 14. Recording Panel (Complex Composition)
```tsx
import {
  Align,
  Arrange,
  Button,
  Container,
  Icon,
  IconButton,
  Logo,
  Select,
  Spacer,
  Tab,
  Tabs,
  Text,
  TextButton,
} from '@loomhq/lens'
import SvgAddPhoto from '@loomhq/lens/icons/add-photo'
import SvgBell from '@loomhq/lens/icons/bell'
import SvgCanvas from '@loomhq/lens/icons/canvas'
import SvgChevronDown from '@loomhq/lens/icons/chevron-down'
import SvgDesktopMac from '@loomhq/lens/icons/desktop-mac'
import SvgHome from '@loomhq/lens/icons/home'
import SvgMic from '@loomhq/lens/icons/mic'
import SvgMoreHoriz from '@loomhq/lens/icons/more-horiz'
import SvgRecord from '@loomhq/lens/icons/record'
import SvgVideoCam from '@loomhq/lens/icons/video-cam'

export const RecordingPanel = () => (
  <Container
    backgroundColor="backgroundSecondary"
    padding="xlarge"
    overflow="auto"
  >
    <Container
      shadow="large"
      radius="medium"
      width="50"
      padding="medium"
      backgroundColor="background"
    >
      {/* Header */}
      <Arrange columns={['1fr', 'auto']}>
        <Logo maxWidth={13} />
        <Arrange gap="xsmall">
          <IconButton icon={<SvgBell />} altText="Notifications" />
          <IconButton icon={<SvgHome />} altText="Home" />
          <IconButton icon={<SvgMoreHoriz />} altText="More options" />
        </Arrange>
      </Arrange>

      <Spacer bottom="large" />

      {/* Mode Tabs */}
      <Tabs hasFullTabs>
        <Tab icon={<SvgVideoCam />} isActive>
          Video
        </Tab>
        <Tab icon={<SvgAddPhoto />}>Screenshot</Tab>
      </Tabs>

      <Spacer bottom="medium" />

      {/* Screen selection */}
      <Select
        selectedOptionValue="screen-only"
        options={[
          {
            value: 'screen-only',
            title: 'Screen only',
            icon: <SvgDesktopMac />,
          },
        ]}
      />

      <Spacer bottom="small" />

      <Select
        selectedOptionValue="fullscreen"
        options={[{ value: 'fullscreen', title: 'Full screen' }]}
      />

      <Spacer bottom="small" />

      <Align>
        <TextButton icon={<SvgCanvas />}>
          Create recording canvas
        </TextButton>
      </Align>

      <Spacer top="large" />

      <Text fontWeight="bold">Recording Settings</Text>

      <Spacer top="medium" />

      {/* Camera setting */}
      <Arrange gap="small" columns={['auto', '1fr']}>
        <Container
          width={4.5}
          height={4.5}
          radius="medium"
          backgroundColor="highlight"
        >
          <Align>
            <Icon color="primary" icon={<SvgVideoCam />} />
          </Align>
        </Container>
        <Select
          selectedOptionValue="facetime"
          options={[
            { value: 'facetime', title: 'FaceTime HD Camera' },
            { value: 'none', title: 'None' },
          ]}
        />
      </Arrange>

      <Spacer top="small" />

      {/* Microphone setting */}
      <Arrange gap="small" columns={['auto', '1fr']}>
        <Container
          width={4.5}
          height={4.5}
          radius="medium"
          backgroundColor="highlight"
        >
          <Align>
            <Icon color="primary" icon={<SvgMic />} />
          </Align>
        </Container>
        <Select
          selectedOptionValue="macbook"
          options={[
            { value: 'none', title: 'None' },
            {
              value: 'macbook',
              title: 'MacBook Pro Microphone (Built-in)',
            },
          ]}
        />
      </Arrange>

      <Spacer top="large" />

      {/* Quality indicator */}
      <Arrange justifyContent="space-between" alignItems="center">
        <Arrange gap="small" alignItems="center">
          <Icon color="success" icon={<SvgRecord />} />
          <Text size="body-sm" color="bodyDimmed">
            Internet speed is very fast.
          </Text>
        </Arrange>
        <TextButton
          size="small"
          icon={<SvgChevronDown />}
          iconPosition="right"
        >
          Auto (1080p)
        </TextButton>
      </Arrange>

      <Spacer top="medium" />

      <Button variant="record" width="full" size="large">
        Start recording
      </Button>
    </Container>
  </Container>
)
```
---
## 15. Popover User Profile Card
```tsx

import {
  Arrange,
  Avatar,
  Button,
  Container,
  Popover,
  Spacer,
  Text,
} from '@loomhq/lens'
import { useState } from 'react'

export const PopoverUserCard = ({
  avatarSrc,
  name,
  location,
  videoCount,
}: {
  avatarSrc: string
  name: string
  location: string
  videoCount: number
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      isOpen={isOpen}
      placement="rightCenter"
      content={
        <Container
          shadow="large"
          radius="medium"
          width="40"
          padding="large"
          backgroundColor="overlay"
        >
          <Arrange gap="medium" alignItems="start">
            <Avatar size={8} imageSrc={avatarSrc} name={name} />
            <div>
              {/*
                Raw div used here as a grouping shell only.
                No Lens layout component is being replaced —
                this is a content-grouping boundary for the
                text block alongside the avatar.
              */}
              <Text variant="title">{name}</Text>
              <Text color="bodyDimmed">{location}</Text>
              <Text color="bodyDimmed">
                {videoCount} published videos
              </Text>
            </div>
          </Arrange>

          <Spacer top="medium">
            <Arrange gap="small" columns={['1fr', '1fr']}>
              <Button variant="primary">Follow</Button>
              <Button variant="neutral">View profile</Button>
            </Arrange>
          </Spacer>
        </Container>
      }
    >
      <Arrange gap="small" alignItems="center">
        <Avatar
          imageSrc={avatarSrc}
          name={name}
          size={4}
          onClick={() => setIsOpen((v) => !v)}
        />
        <Text>Hover me</Text>
      </Arrange>
    </Popover>
  )
}
```
---

## 16. Form With Validation + Submit Error
```tsx

import {
  Button,
  Container,
  FormField,
  Spacer,
  Text,
  TextInput,
} from '@loomhq/lens'

export const ValidatedForm = ({
  emailError,
  formError,
  isSubmitting,
  onSubmit,
}: {
  emailError?: string
  formError?: string
  isSubmitting: boolean
  onSubmit: () => void
}) => (
  <Container maxWidth={40}>
    <FormField
      label="Email"
      errorMessage={emailError}
      labelFor="email"
    >
      <TextInput
        id="email"
        placeholder="name@company.com"
        hasError={!!emailError}
      />
    </FormField>

    <Spacer bottom="medium" />

    <FormField label="Full name" labelFor="fullname">
      <TextInput id="fullname" placeholder="Your full name" />
    </FormField>

    <Spacer bottom="large" />

    <Button
      variant="primary"
      hasLoader={isSubmitting}
      isDisabled={isSubmitting}
      onClick={onSubmit}
      width="full"
    >
      Save changes
    </Button>

    {formError && (
      <>
        <Spacer bottom="medium" />
        <Text color="danger">{formError}</Text>
      </>
    )}
  </Container>
)
```
---

## 17. Empty State

``` tsx

import {
  Align,
  Button,
  Container,
  Icon,
  Split,
  Text,
} from '@loomhq/lens'

import SvgAdd from '@loomhq/lens/icons/add'
import SvgInbox from '@loomhq/lens/icons/inbox'

export const EmptyState = ({
  onCreate,
}: {
  onCreate: () => void
}) => (
  <Align alignment="center">
    <Container padding="xlarge">
      <Split direction="column" alignItems="center" gap="medium">
        <Icon icon={<SvgInbox />} color="bodyDimmed" />
        <Text size="heading-md" variant="title">
          No items yet
        </Text>
        <Text color="bodyDimmed" alignment="center">
          Get started by creating your first item.
        </Text>
        <Button
          variant="primary"
          iconBefore={<SvgAdd />}
          onClick={onCreate}
        >
          Create item
        </Button>
      </Split>
    </Container>
  </Align>
)
```
---
## 18. Page Layout

```tsx

import {
  Button,
  Container,
  Split,
  Text,
} from '@loomhq/lens'
import SvgAdd from '@loomhq/lens/icons/add'

export const PageLayout = ({
  title,
  onNew,
  children,
}: {
  title: string
  onNew: () => void
  children: React.ReactNode
}) => (
  <Container padding="large" htmlTag="main">
    <Split direction="column" gap="large">
      <Split
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          size="heading-lg"
          htmlTag="h1"
          variant="mainTitle"
        >
          {title}
        </Text>
        <Button
          variant="primary"
          iconBefore={<SvgAdd />}
          onClick={onNew}
        >
          New item
        </Button>
      </Split>

      <Container borderSide="bottom" />

      {children}
    </Split>
  </Container>
)
```