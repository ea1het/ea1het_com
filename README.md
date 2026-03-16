# EA1HET

This site has been migrated to **Docsify** using **docsify-themeable**.

## Start here

- [Site pages](/pages)
- [Posts](/blog/)
- [Original live site](https://ea1het.com)

## Migration notes

- Source of truth: `https://ea1het.com/wp-json/wp/v2/...`
- Migrated content is generated into root-level pages and `blog/`.
- To refresh content from WordPress, run:

```bash
python3 scripts/migrate_wordpress_to_docsify.py
```

`OLD_SITE/` is intentionally ignored for this migration.
