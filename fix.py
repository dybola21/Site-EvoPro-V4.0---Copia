import os, re
files = ['src/components/sections/SolutionsSection.tsx', 'src/components/sections/AIAgentsSection.tsx', 'src/components/sections/Hero.tsx', 'src/components/sections/WebsiteSection.tsx', 'src/components/sections/ProcessSection.tsx']
for f in files:
    if os.path.exists(f):
        content = open(f, encoding='utf-8').read()
        content = re.sub(r'<motion\.div data-mobile-safe=" true\\\\?\s*', '<motion.div data-mobile-safe="true" ', content)
        content = re.sub(r'<motion\.div\b(?!.*data-mobile-safe)', '<motion.div data-mobile-safe="true"', content)
        open(f, 'w', encoding='utf-8').write(content)
