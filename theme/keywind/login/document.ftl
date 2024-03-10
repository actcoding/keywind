<#macro kw script="">
  <title>${msg("loginTitle", (realm.displayName!""))}</title>

  <meta charset="utf-8">

  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="robots" content="noindex, nofollow">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="icon" type="image/svg+xml" href="https://act-coding.de/logo.svg" />

  <#if properties.meta?has_content>
    <#list properties.meta?split(" ") as meta>
      <meta name="${meta?split('==')[0]}" content="${meta?split('==')[1]}">
    </#list>
  </#if>

  <#if properties.favicons?has_content>
    <#list properties.favicons?split(" ") as favicon>
      <link href="${url.resourcesPath}/${favicon?split('==')[0]}" rel="${favicon?split('==')[1]}">
    </#list>
  </#if>

  <#if properties.styles?has_content>
    <#list properties.styles?split(" ") as style>
      <link href="${url.resourcesPath}/${style}" rel="stylesheet">
    </#list>
  </#if>

  <#if script?has_content>
    <script defer src="${url.resourcesPath}/${script}" type="module"></script>
  </#if>

  <#if properties.scripts?has_content>
    <#list properties.scripts?split(" ") as script>
      <script defer src="${url.resourcesPath}/${script}" type="module"></script>
    </#list>
  </#if>
</#macro>
