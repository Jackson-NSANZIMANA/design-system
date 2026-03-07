import { Button, IconButton } from '@loomhq/lens'

export const Test = () => {
      return (
            <div>
                  {/* Violation 1: size="xs" does not exist in your JSON DB */}
                  <Button size="xs">Invalid Size</Button>

                  {/* Violation 2: IconButton missing 'altText' (required in DB) */}
                  <IconButton icon={<svg />} />

                  {/* Violation 3: Hallucinated responsive key 'mobile' */}
                  <Button width={{ mobile: 'full', desktop: 'auto' }}>
                        Bad Responsiveness
                  </Button>
            </div>
      )
};