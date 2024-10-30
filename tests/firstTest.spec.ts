import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test.describe('Form tabs', () => {

    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click()
    })

    test('my frst playwright test', async ({ page }) => {
        await page.getByText('Form Layouts').click()
    })

    test('navigate to datepicker page', async ({ page }) => {
        await page.getByText('datepicker').click()
    })

})