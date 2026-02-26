import { execSync } from 'child_process'

const sites = ['main', 'hvac', 'dental', 'lawyer', 'auto']

console.log('🚀 Building all FYIAI sites...\n')

for (const site of sites) {
    console.log(`📦 Building ${site}...`)
    execSync(`VITE_SITE=${site} npx vite build --outDir dist-${site} --emptyOutDir`, {
        stdio: 'inherit',
        env: { ...process.env, VITE_SITE: site }
    })
    console.log(`✅ dist-${site}/ ready\n`)
}

console.log('🎉 All sites built successfully!')
console.log('   dist-main/   → fyiai.us')
console.log('   dist-hvac/   → hvac.fyiai.us')
console.log('   dist-dental/ → dental.fyiai.us')
console.log('   dist-lawyer/ → lawyer.fyiai.us')
console.log('   dist-auto/   → auto.fyiai.us')
