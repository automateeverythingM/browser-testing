import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('https://platform-development-git-feature-shareble-stats-fc-urban.vercel.app/profile/player-card/my-stats/user_and_director')

  // keep browser open
  await page.pause()
})