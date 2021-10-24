Understanding the Six PowerShell Profiles - Scripting Blog

::: {#lightningjs-usabilla_live style="display:none"}
:::

::: {.social-icon-bar}
[](https://www.facebook.com/sharer/sharer.php?u=https://devblogs.microsoft.com/scripting/understanding-the-six-powershell-profiles/ "Share on Facebook"){.facebook}
[](https://twitter.com/intent/tweet?url=https://devblogs.microsoft.com/scripting/understanding-the-six-powershell-profiles/&text=Understanding%20the%20Six%20PowerShell%20Profiles "Share on Twitter"){.twitter}
[](https://www.linkedin.com/shareArticle?mini=true&url=https://devblogs.microsoft.com/scripting/understanding-the-six-powershell-profiles/ "Share on LinkedIn"){.linkedin}
:::

::: {#cookie-banner}
:::

::: {#headerArea .uhf data-m="{"cN":"headerArea","cT":"Area_coreuiArea","id":"a1Body","sN":1,"aN":"Body"}"}
::: {#headerRegion data-region-key="headerregion" data-m="{"cN":"headerRegion","cT":"Region_coreui-region","id":"r1a1","sN":1,"aN":"a1"}"}
::: {#headerUniversalHeader data-m="{"cN":"headerUniversalHeader","cT":"Module_coreui-universalheader","id":"m1r1a1","sN":1,"aN":"r1a1"}" data-module-id="Category|headerRegion|coreui-region|headerUniversalHeader|coreui-universalheader"}
::: {data-m="{"cN":"cookiebanner_cont","cT":"Container","id":"c1m1r1a1","sN":1,"aN":"m1r1a1"}"}
::: {#uhfCookieAlert data-locale="en-us"}
::: {#msccBannerV2}
:::
:::
:::

[Skip to main
content](https://devblogs.microsoft.com/scripting/understanding-the-six-powershell-profiles/){#uhfSkipToMain
.m-skip-to-main}

::: {.theme-light .js-global-head .f-closed .global-head-cont data-m="{"cN":"Universal Header_cont","cT":"Container","id":"c3m1r1a1","sN":3,"aN":"m1r1a1"}"}
::: {.c-uhfh-gcontainer-st}
[![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAAuCAYAAABK69fpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTAwQkM2Mzk4NDBBMTFFNjhDQkVCOTdDMjE1NkM3RkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTAwQkM2Mzg4NDBBMTFFNjhDQkVCOTdDMjE1NkM3RkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMkM5MzFBNDcwQTExMUU2QUVERkExNDU3ODU1M0I3QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMkM5MzFBNTcwQTExMUU2QUVERkExNDU3ODU1M0I3QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgQJy/MAAAxESURBVHja7FwNlFVVFT6PN8MMM8AIjPxomEyggCYgajIaguCkaC5AEocif9CIiLLyp9IMC9NgVRqrGpMSwcFSIs3URHERJoJCSlIgMQk0YCS/MjAww8zrbO/36rz99rnvzpt3Z6Z551trL5hz3z3n3HPO/t/3Rg6NL6lXIeCWXhfk0r99Ji05Hkb/IxojI8vK6lfbrk+fPl05OLQ2OrglcHBwDObg4BjMwcHBMZiDg2MwBwfHYA4ODr7IaW8PNOfliNryeKnqpM50u+vQXJRoGqlpmKZiTUc0HdT0hKa1Wclg+9/urWqqe6pOPf8vpjtYU39Nb4Mc2g6+oukWTSdZLL/sZLDDu4tU/ZE82+VZmko1NQgL9oymymYMPUTT7ZoaWXtU0wuafmm00QS/p+kLmvIhGedpmu3OdauDCiR+gLNiw7GsNRE75DSqSIeY7fJYTVdarp2u6TeajqY5NDFXueXaUcZgozV91fi7QNNdml7U9Cd3xlsVs1IwV1xAZieDpYCf5DlD0wWaVqTRbz9Nl/hcr2N/jxJ+E8H4jsFaD700fVFo365pIfwvcu7/xq53hWV0tqalmrZkK4OlkkrXpMlgE+EEB8V6S/tf3Ta0KiiYcSpre1fT5WxvOkAgfkLTJAjG09D+sslgLkyfiAlNZJQ4Y05t4j2/1/QQa7tf0x/cFrQqBoFxTDwpCD7ysztqukfTNE0DwUs13L93GiwRPTRN0fTjJtxThgBHU1CraYamRzSdrOmfmtZoirktaFU0Cm1vNMH0z3ofLAhI5T+ogkeKbhA2KYhlQJLuFbfcbZ7B6n32L2ZpdwwG7NB0GKZBHOdqGqqC5TnINLiIta1IEfDgdnwcMcsGSyhSXn6mGHtI972vaZem3QHHihkHpLumPvh/NZx5G05AMID+LcAB3K/pPU3/TmMPOmk6BX1SSuM4xv9XE/ujQENvzKsQ/dC89qCvVPvQgPE5cvFvlK1frkWQJvw+2xmMwucLNX3faKO81OSADEZBkW7G3xs1PRuAwegw/QSMorDBFJn6cgozcQhMy3OUV2XQjUnarZr+oulhTc8bG/5d3BMzJPUEHJA7NV2K/mJ4bko37GVjj0H7UAQCehjXDoExyZz6tabfBVg7YuqZCBQMZP1RXnAb5vINi9CI43xN12oarrxorulD12BemzUtUV4FBmfue5UXGazHGnDcrLwgVg5jsCjmzfv7oaZ9uB7Jdgaj518OM+90ZibehQ2yoQAba4LyaDsDjFuIyFS+0XYiGC1mOYxzNF3P7uGScxCIDtpKmLnERBTlupD9/sOafqqSUwbn4qDEQZryATBk1DJ2F2PscgQGvqbpHcvvidkpL/hRn7UdDJpvYbBiY006WvrpDCYgGg/rgnJcm4z9vwhCw4b4PIIgivVLUI/ZDNqYKhwIE30htfxwhUoM6RIzPi5EoWy2PmfeI5bfUtHXUmiu/IDPFROCKnys+5Scj6s17ieN+RIETjTg2BEw43ImtOIgbbHMh7lMHLOYzb2wJtN9mEvCGGj2YQHWPSPIdgaL4OBUCs7sZJ9DRe3Xsbb1MPMKMqxhf6a8yg8J+2CWvpXCjJI0xJU+QqcePs3DFiZR0E5kjm63XKcaywWGGRxftzkQYDwa9xLM6xWGeZonCCxqe0TwfePYjnnZtGdfCMJijFsYtomU7cjHAaV6wXFG+2iYBm8J9wwTDv2CEOY2zaJJKaw/D1piHzQOOffnKa9ANa8JwvN5+Ey1eN5SaI3bmKSP42n4GVW4pwD+z23wh0xcCC0zF3+XwFzlUbcvwWSsh6lbAu06Q2CwuN/GQRHZu5VXNH0EZu5H4GOOEZifinnvgKDsargGvEyK5v6MRRA9wMzHWqz/xv8yWPzrT2Hh3aVT0mbiiopFTb6nIT0tpiCtxzGHdaKFwa5h5to2I6iQKXTHAeDYAH9iG2vfgyAHMcDFKlhObTYOJT84A5Rcj0fpi88L7Tvg8y0TzM6bNP1c0wFNH1LJify16NcM1sTfLljErIhuYEaOF2Bx7BcE0ToEOD7Jrt2AQNObzN/iIG24yrJ+fDyKXK42+2x3JmLj3/Ue5qb1pbiVKvmVkc+o5MLOIjCYid8qL0ydSVwmmFLkt00VmEuxiN5TKnXRMh2a7wjtdZD4XVn7VkT0lM9hmyH4NKQtzjKEGWf8bsJYpkYwfdUyBGdMvAdm2W/powbz4vvTG9qam5+ShSMhT3AhItxFyFkwcn5DGAf9xlWzPhi8YuKSurQ7Wb7EfklFRknfRbxiQLWav+vEdEbbA0b5utHWDwf9Saa9TmaOeGUIS3ip0PaQRaOmgwU+Wk7ybxb6HOI4NkNQjWPtI8DQVNf3PvPLKPL4nPKitqnqQKWgDEVuq1PctxN7eBNrH4tgiQtyhGgimlikEstfSEhcbawTmU9T2D2vKnvxbrrIRbTNBDFDpmoV4/kuG3h+h3yyNQH7flVoiyfyqyzjlsLPIQYrhz8pYbBFEwfB60LbSWGfR1fsm4hNsOdNXG6YauT0f0xgykzjBJWYRI5r2OoM9d/oo41Iu3QRzMaDAfuWoopRo59vKa96RjK5Loa/RO/FfVYwvwqF5wgaPd0ltJ3iGKzlsUAl5l66woEmXMvs9G0qnAp4qWzqqErOZ4Wx95SczWnGWWmwPE8crykvT+b3ag5FJSkUP9dgziLBV2tUwcvLpJRLgWOwlgdJT/5C3VXKSypfleQKen5FphFRyeHpQhVyzgY4LvhmERW80r9TgN+QlUBpjtnKi/TZcKv6X9TwkEXzRZrxrNWOwVoeNYLjS5EwKisqZlL5FyHNoVbQBN1bwqRRXoHtQcF8C/qe3AChTSq2pagepQjoTfLPKS+cLoG+W9IT68EjlDkq+QVJG/oHNGcdg7UAHmXmGPlDl7H1WgVzJywmlzZ/Ugs8OwmOrUJ7WcDzJEU/1/ncQ5qJoqOUGpgnmHyUdD4N/98s3H9JwOcaK7S9FsLaxRyDpcY/lPfWsZ8ZsjjkOSwX2iiCWdoCwvNpoW1qAA1KTHiWwECvBJgThe+pGmSt8BwFhvnOQcUA56eY1wiBwSi9sroZa9QgCIMc7us5BrNLokofB3q7Cv/1/idUckEwmWqPQZsqi9P+aQRq8poxNvlIe1hbDwQeSnwO8YOCMHrU8FM/DvN7UAofkO9F3PeiMP47wprQ8w6z9EftVKWTKwiwjc30VQ8I/ucYznEO9kNGSd0hlms7Qx6ftCh9n+/brJ20yLNgNPrAShWk5lAwHh3iDSp4dE3CNuWVN32TtY/S9EeM/QYCFKdCg0xRyamFvczsy0OgiOZJCWIq8H0Tfh8l9amciadBdhhMRb+jOsj57DdngPkoxL8G8+8L5qJwfy/Bx71HNTttKqYIbgZf0ToNdAxmxxFosSGCRF3cQnOgV0rOVMnRS0I5qA5aI5cdoOaCXkQ8TzCtqJ7wVmONCnxMqFlM4zQamnYqiAIqlILoYumL8oxmDqsCQuRq9jti7pkgv3nR/t2hAn6ZNwWoOuR61kY5zDuxRnnORPTHYyo5okYSsqW+XUgH7zrllXDZ0FEwfzKR36mB9PcrYi7w8aemYf1MSLmoImgYqS8yw+cKphnVHv4qjXkdg4b5UYb25zkfRs1rlz5YLBbxS9h0FqSN3xqQGchfVahMYX5Jvk+h4LjzcqCuPgf9U8p7vSLI9+spqLBSJZZ8dREOepC9J9+JXiy9PeDYtfCxRsJf49inguUNyfSi98bGK/mt8sMwSamIN8i3JOuxJlSV4/fFsPyA+2n2e6NKrMhX7doH65jToKIRK4vRtykWMjNwb4pgB6n7pwyzJ1VBKkn8yaytSjhAk9jm7VX2ZC6Nez80Ah1ees+K6vK64x7SdFvge1HEbh07BMQgvdlz7Q+4pMehRYhhRiOYQS9h9oSgOYbno0O2WvnXLK5HH2fD9Ka3mvsY/WyEb0f+y6YAgagKBIOoxGo4668OPuKfsSarA/ily4Qgyusp7qE5U2piAnzUAUZgZkMkWnmg7VbT+8BWTd/wYgc1c/FYFcvv197N14hhcjWlZChTyDEOekMb6Ces/tId/4M9aXcmYjQaU+XnbM4G/zAG7XK8FZhLGWM3tJF+wuov3fEb26UPRss6vP9u5eDQFtD+GEzLjc6d69zOOjgGCw21bmMdHIM5ODgGc3BwcAzm4NAm8R8BBgAGrc+T79nGEQAAAABJRU5ErkJggg==){.c-image}
[Microsoft]{.sf-hidden itemprop="name" role="presentation"
aria-hidden="true"}](https://www.microsoft.com/){#uhfLogo .c-logo
.c-sgl-stk-uhfLogo}

::: {.f-mobile-title .sf-hidden}
:::

::: {.c-show-pipe .x-hidden-vp-mobile-st}
[Scripting](https://devblogs.microsoft.com/scripting/){#uhfCatLogo
.c-logo .c-cat-logo}
:::

::: {.cat-logo-button-cont .x-hidden .sf-hidden}
:::

-   -   [DevBlogs](https://devblogs.microsoft.com/){#DevBlogs
    .c-uhf-nav-link}
-   ::: {.c-uhf-menu .js-nav-menu}
    Developer
    :::

-   ::: {.c-uhf-menu .js-nav-menu}
    Technology
    :::

-   ::: {.c-uhf-menu .js-nav-menu}
    Languages
    :::

-   ::: {.c-uhf-menu .js-nav-menu}
    .NET
    :::

-   ::: {.c-uhf-menu .js-nav-menu}
    Platform Development
    :::

-   ::: {.c-uhf-menu .js-nav-menu}
    Data Development
    :::

-   ::: {#overflow-menu}
    :::

::: {.login-section .c-me}
[Login](https://devblogs.microsoft.com/scripting/wp-login.php?redirect_to=https%3A%2F%2Fdevblogs.microsoft.com%2Fscripting%2Funderstanding-the-six-powershell-profiles%2F){.login-but}
:::

::: {.c-uhfh-actions data-m="{"cN":"Header actions_cont","cT":"Container","id":"c9c3m1r1a1","sN":9,"aN":"c3m1r1a1"}"}
::: {.wf-menu}
:::

::: {.x-screen-reader aria-live="assertive"}
:::

[Search]{.sf-hidden role="presentation"} [Search]{.c-uhf-tooltip
.c-uhf-search-tooltip .sf-hidden role="tooltip"}

::: {#universal-header-search-auto-suggest-transparent .m-auto-suggest role="group"}
:::
:::
:::
:::
:::
:::
:::

::: {#page .hfeed .site}
::: {#single-wrapper .wrapper}
::: {#content .container tabindex="-1"}
::: {#mainContent .row}
::: {#primary .col-md .content-area}
::: {#main .site-main role="main"}
::: {#featured .row .justify-content-center .postcontent}
::: {.entry-content .col-12 .sharepostcontent}
Understanding the Six PowerShell Profiles {#understanding-the-six-powershell-profiles .entry-title}
=========================================

::: {.row .justify-content-center}
::: {.col-md-4}
::: {style="margin:20px 0;text-align:center"}
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22102%22%20height=%22150%22%3E%3Crect%20fill-opacity=%220%22/%3E%3C/svg%3E){.avatar
.avatar-58 .photo .avatar-default .lazyloaded width="58" height="58"}

Dr Scripto
:::
:::
:::

::: {style="clear:both;padding-bottom:10px"}
:::

::: {.entry-meta .entry-meta-layout}
May 21st, 2012
:::

::: {.social-icon-bar-mobile .row .justify-content-center .sf-hidden}
:::

**Summary**: Microsoft Scripting Guy, Ed Wilson, discusses the six
different Windows PowerShell profiles, and when to use each.

[![Hey, Scripting Guy!
Question](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAiACIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7M/aT/ahb4W6la+EPCtpHq3ja+2gJJzFZh+ELAfec9QvYcnjAOn4V/Z4m8Tabb6h8T/EGqeLtWmCyyWb3bw2ULHnakMZVcDOORnrXyJ4Eup/F/wC2ks+toVuZfEV15kbNnYYy6omf9kKoB9q/S+vcxkPqMadKlo2rt9Xfz7eh4+El9cc6lTVJ2S6fd3PHtW/Zi8NW9nK/g691TwJrGMw32kX02wMOR5kLOUkX2I7nBFcF8Gf2mNasviRdfCz4npBD4mt7g2trrFuoSK8bGUDrwFZ1wysMBtwGAcZ+nq/Or9vdRo/x70/ULJ/JvTpdtPvi4YSJLJsbPr8o59h6U8Avr0pYetrdaPqn69vIMY/qcVXpaWeq6Nf5+Z+itFed6H8VluNF0+W5sZTcvbxtKQwA3FQT+uaK8J6Ox7Nmz5o/aW+Cev8Aw1+LVt8X/B9hLqenx3ceoahZ2w/eW8q48xsAZ8txnJAO0lieOn1t8PfiHoXxP8L2mveH76O9srhQSFYb4XxzHIv8LDoQa6SvLPH37OvhnxeLm80lrrwX4imB/wCJ14dlNpMx/wCmoQgSr6hufQivSliI4mEIV9HHRPy81+v4HnxoSw8pTo6qWtvPyZ6H4g8RaZ4V0m41TWL+30zTrdd0tzdSBEQe5NfCtr4Q1b9sD9oK48WGzntfA1pJHDb3E8ZTzreI/KFB67mLMfTdirF38G/iP8KfH9nq/jXRbv4yeEbclTtnlvJIVzxIkDsSrjrtAKnkZ719jeAfHHhHxTpkKeGL+zeJFx9hjHkzQ46q8LAOhHowFdX+4Rc6D5nJW5lsvl39bHP/AL5JRrLlUX8L6/8AA9DpbWxgs7aGCONRHEgReOwGBRViivDPXCiiigArPv8AQdM1SRJbzTrS7kT7rzwK5H0JFFFa0viM6nwl8dBRRRWRof/Z){.lazyloaded}](https://devblogs.microsoft.com/wp-content/uploads/sites/29/2019/02/q-for-powertip.jpg){.lightbox-link} Hey,
Scripting Guy! Dude, I have been reading some of the posts in your most
excellent blog; and first of all, I want to say I think you are great.
Now for the question: I do not get the Windows PowerShell profile. I
mean I get it, but not really. Here is part of my problem. I put some
things in the profile, and then I go back and they are not there. Like,
what is up with that? I hope you can help me. By the way, I am, like,
totally looking forward to seeing you and the Scripting Wife at TechEd
2012 in Orlando. You will know me, because I sort of look like
[Urkel](http://en.wikipedia.org/wiki/Steve_Urkel), and I always wear
plaid shirts (but I don't wear suspenders).

---BB

[![Hey, Scripting Guy!
Answer](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAiACIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U68z/aN+JX/CqfhBr+txSeXqLRfZLD1+0SfKhHrt5f6Ia9Mr5+8dWcPxm/aI0rwpNGLrw54QtG1DUo8ZSS7nUrFG3+7ES3/bSurDRi6nNNe7HV/Lp83p8znrykocsN3ov68lqXP2N/ilL8Svg7Zx39013rOiv/Z91JK26R1AzG7E8klCBk9Spr3Wvg74B3Ev7O37WGu+Abtmh0bV5GtbbzDwQf3lq+T1JUlPqa+8a6cxoxpV3KHwy95ejOfA1XUopT+KOj+QUUUV5h6Bk+LPEtl4N8M6rrupSeVYabbSXUzf7KKWOPc4wPrXzH8BvHHirwvpOr63qHwt8Uatq/iW+fVZ7+08gxusnMarukBCquFAPYCuh/am8faZrWueEfhSmpQRTa9qMMmqkyqBFao25Y3OeDI6gYPUKfWvoqxtIrGzgtoFCQxIERV6AAYFeiv9nornjfn11vsttvO/4HD/ABqr5ZW5dOm73/C34nwD+2FqGt+INY8O+PIvAviDwfd6ay20t/qKRbGYOHg5R2wQ2/r/AHgK+2fhT47tviZ8O9B8S2xG2/tVkkVf4JRxIn4MGH4Vn/HTwzpnjD4ReKtK1a4itLSWxkcXMxAWGRBvjc5PZ1U/hXy1+wB8ZrLT4dS8BavfRWrTSfbdL86QKHZgBLEpPfIDAd8tXdJfXMDzRjZ03+D/AK+444v6rjOWUtKi/FH3DRRRXgHtHzL4m+HfhQ+INSJ8MaPkysT/AKBF/wDE17h8MYUt/BWnwxIsUMalEjQYVVB4AHYUUV7OO+CJ5eE+NjviRoGmeIPCV/Fqmm2mpRJEzKl5AsqqcdQGBwa+en+HfhXYx/4RnR8gcf6BF/8AE0UVtgv4Rniv4h7Rp9/cx6fbIlxKiLEoCq5AAwOBRRRXgvc9lbH/2Q==){.lazyloaded}](https://devblogs.microsoft.com/wp-content/uploads/sites/29/2019/02/a-for-powertip.jpg){.lightbox-link} Hello
BB,

Microsoft Scripting Guy, Ed Wilson, is here. Last week was an absolutely
great week. The Scripting Wife and I had dinner one night with Rich from
the NYC Windows PowerShell Users Group (he is also a moderator for the
Scripting Guys forum and writer of a couple of guest blogs). Rich was
kind enough to bring me some Gunpower green tea, and I am sipping some
right now. It is wonderful with a half teaspoon of organic lavender
added to the pot. We also had the PowerScripting Podcast with the two
winners of the 2012 Scripting Games and Jeffrey Snover. That
conversation was fun and informative. I also enjoy talking to Jeffrey,
and I look forward to sitting-in on at least one of his sessions at
Microsoft TechEd 2012.

Six, count 'em, six different PowerShell profiles[](#six-count-em-six-different-powershell-profiles){.linkicon}
===============================================================================================================

BB, there is no doubt that you are a bit confused with Windows
PowerShell profiles. There are, in fact, six different profiles. The
Windows PowerShell console and the Windows PowerShell ISE have their own
profiles. In addition, there are profiles for the current user and
profiles for all users. The table that follows lists the six profiles
and their associated locations.

::: {.table-responsive}
+-----------------------------------+-----------------------------------+
| **Description**                   | **Path**                          |
+-----------------------------------+-----------------------------------+
| Current User, Current Host --     | \$Home\\\[My                      |
| console                           | \]Documents\\WindowsPowerShell\\P |
|                                   | rofile.ps1                        |
+-----------------------------------+-----------------------------------+
| Current User, All Hosts           | \$Home\\\[My                      |
|                                   | \]Documents\\Profile.ps1          |
+-----------------------------------+-----------------------------------+
| All Users, Current Host --        | \$PsHome\\Microsoft.PowerShell\_p |
| console                           | rofile.ps1                        |
+-----------------------------------+-----------------------------------+
| All Users, All Hosts              | \$PsHome\\Profile.ps1             |
+-----------------------------------+-----------------------------------+
| Current user, Current Host -- ISE | \$Home\\\[My                      |
|                                   | \]Documents\\WindowsPowerShell\\M |
|                                   | icrosoft.P                        |
|                                   | owerShellISE\_profile.ps1         |
+-----------------------------------+-----------------------------------+
|  All users, Current Host -- ISE   | \$PsHome\\Microsoft.PowerShellISE |
|                                   | \_profile.ps1                     |
+-----------------------------------+-----------------------------------+
:::

 

Understanding the six Windows PowerShell profiles[](#understanding-the-six-windows-powershell-profiles){.linkicon}
------------------------------------------------------------------------------------------------------------------

The first thing to do to understand the six Windows PowerShell profiles
is to keep in mind that they move. They change (sort of like the
staircases at [Hogwarts](http://en.wikipedia.org/wiki/Hogwarts)). As
long as you realize that they are a moving target, you will be fine. In
most cases, when talking about the Windows PowerShell profile, people
are referring to the *current user, current* *host* profile. In fact, if
no one qualifies the Windows PowerShell profile with its associated
scope or description, it is safe to assume that they are talking about
the **Current User, Current Host* *profile.

**Note   **A Windows PowerShell profile (any one of the six) is simply a
Windows PowerShell script. It has a special name, and it resides in a
special place, but it is simply a script. In this regard, it is sort of
like the old-fashioned
[autoexec.bat](http://en.wikipedia.org/wiki/AUTOEXEC.BAT) batch file.
Because the Windows PowerShell profile is a Windows PowerShell script,
you must enable the Script Execution policy prior to configuring and
using a Windows PowerShell profile. For information about the Script
Execution policy refer to [this collection of Hey, Scripting Guy!
Blogs](http://blogs.technet.com/search/searchresults.aspx?q=%22Script%20execution%20policy%22&sections=7618).

Examining the \$profile variable[](#examining-the-profile-variable){.linkicon}
------------------------------------------------------------------------------

When you query the **\$profile** automatic variable, it returns the path
to the *Current User, Current Host* profile. This makes sense, and it is
a great way to easily access the path to the profile. The following
script illustrates this technique from within the Windows PowerShell
console.

PS C:\\\> \$profile

C:\\Users\\ed.IAMMRED\\Documents\\WindowsPowerShell\\Microsoft.PowerShell\_profile.ps1

Inside the Windows PowerShell ISE, when I query the **\$profile**
automatic variable, I receive the output that is shown here.

PS C:\\Users\\ed.IAMMRED\> \$profile

C:\\Users\\ed.IAMMRED\\Documents\\WindowsPowerShell\\Microsoft.PowerShell**ISE**\_profile.ps1

To save you a bit of analyzing...

The difference between the Windows PowerShell console **Current User,
Current Host* *profile path and the Windows PowerShell ISE *Current
User, Current Host* profile path is three letters: *ISE.*

BB, these three letters are probably causing you problems. More than
likely, you are setting something in your Windows PowerShell console
profile, and it is not available inside the Windows PowerShell ISE.

### Unraveling the profiles[](#unraveling-the-profiles){.linkicon}

You can pipe the **\$profile** variable to the **Get-Member** cmdlet and
see additional properties that exist on the **\$profile** variable. This
technique is shown here.

PS C:\\\> \$PROFILE \| Get-Member -MemberType noteproperty \| select
name

 

Name

----

AllUsersAllHosts

AllUsersCurrentHost

CurrentUserAllHosts

CurrentUserCurrentHost

If you are accessing the **\$profile** variable from within the Windows
PowerShell console, the **AllUsersCurrentHost** and the
**CurrentUserCurrentHost** note properties refer to the Windows
PowerShell console. If you access the **\$profile** variable from within
the Windows PowerShell ISE, the **AllUsersCurrentHost** and the
**CurrentUserCurrentHost** note properties refer to the Windows
PowerShell ISE profiles.

### Using the \$profile variable to refer to more than the current host[](#using-the-profile-variable-to-refer-to-more-than-the-current-host){.linkicon}

When you reference the **\$profile** variable, by default it refers to
the **Current User, Current Host* *profile. If you pipe the variable to
the **Format-List** cmdlet, it still refers to the *Current User,
Current Host* profile. This technique is shown here.

PS C:\\\> \$PROFILE \| Format-List \*

C:\\Users\\ed.IAMMRED\\Documents\\WindowsPowerShell\\Microsoft.PowerShell\_profile.ps1

This leads to a bit of confusion, especially because the **Get-Member**
cmdlet reveals the existence of multiple profiles and multiple note
properties. The way to see all of the profiles for the current host, is
to use the *force* parameter. It reveals the hidden properties. The
command illustrating this technique is shown here.

\$PROFILE \| Format-List \* -Force

The command and the associated output from the command are shown in the
image that follows.

[![Image of command
output](data:image/png;base64,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 "Image of command output"){.lazyloaded}](https://devblogs.microsoft.com/wp-content/uploads/sites/29/2019/02/4532.hsg-5-21-12-01.png)

It is possible to directly access each of these specific properties just
like you would access any other property---via dotted notation. This
technique is shown here.

\$PROFILE.CurrentUserAllHosts

The path to each of the four profiles for the Windows PowerShell console
are shown in the image that follows.

[![Image of command
output](data:image/png;base64,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 "Image of command output"){.lazyloaded}](https://devblogs.microsoft.com/wp-content/uploads/sites/29/2019/02/2308.hsg-5-21-12-02.png)

Determine if a specific profile exists[](#determine-if-a-specific-profile-exists){.linkicon}
--------------------------------------------------------------------------------------------

To determine if a specific profile exists, use the **Test-Path** cmdlet
and the appropriate flavor of the **\$profile** variable. For example,
to determine if a **Current User, Current Host* *profile exists you can
use the **\$profile** variable with no modifier, or you can use the
**CurrentUserCurrentHost** note property. The following example
illustrates both of these.

PS C:\\\> test-path \$PROFILE

True

PS C:\\\> test-path \$PROFILE.CurrentUserCurrentHost

True

PS C:\\\>

In the same manner, the other three profiles that apply to the current
host (in this example, I am using the Windows PowerShell console) are
determined to not exist. This is shown in the code that follows.

PS C:\\\> test-path \$PROFILE.AllUsersAllHosts

False

PS C:\\\> test-path \$PROFILE.AllUsersCurrentHost

False

PS C:\\\> test-path \$PROFILE.CurrentUserAllHosts

False

PS C:\\\>

Creating a new profile[](#creating-a-new-profile){.linkicon}
------------------------------------------------------------

To create a new profile for *current user all hosts,* use the
**CurrentUserAllHosts** property of the **\$profile** automatic
variable, and the **New-Item** cmdlet. This technique is shown here.

PS C:\\\> new-item \$PROFILE.CurrentUserAllHosts -ItemType file -Force

    Directory: C:\\Users\\ed.IAMMRED\\Documents\\WindowsPowerShell

 

Mode                LastWriteTime     Length Name

----                -------------     ------ ----

-a---         5/17/2012   2:59 PM          0 profile.ps1

To open the profile for editing, use the **ise** alias as shown here.

ise \$PROFILE.CurrentUserAllHosts

When you are finished editing the profile, save it, close the Windows
PowerShell console, reopen the Windows PowerShell console, and test that
your changes work properly.

BB, that is all there is to using the **\$profile** variable to discover
different Windows PowerShell profiles. Windows PowerShell Profile Week
will continue tomorrow when I will talk about editing and testing a
Windows PowerShell profile.

I invite you to follow me on
[Twitter](http://bit.ly/scriptingguystwitter) and
[Facebook](http://bit.ly/scriptingguysfacebook). If you have any
questions, send email to me at <scripter@microsoft.com>, or post your
questions on the [Official Scripting Guys
Forum](http://bit.ly/scriptingforum). See you tomorrow. Until then,
peace.

**Ed Wilson, Microsoft Scripting Guy** 

::: {.row .justify-content-center}
:::

::: {style="clear:both;padding-bottom:10px"}
:::

::: {.authorinfoarea style="margin:30px 0;padding:24px 0;border-top:1px #A6A6A6 solid"}
::: {.post-authoravatar style="float:left;margin-right:20px"}
![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22102%22%20height=%22150%22%3E%3Crect%20fill-opacity=%220%22/%3E%3C/svg%3E){.avatar
.avatar-96 .photo .avatar-default .lazyloaded width="96" height="96"}
:::

##### [Dr Scripto](https://devblogs.microsoft.com/scripting/author/the-scripting-guys/){.no-underline} {#dr-scripto .post-authorname}

::: {.social-links}
Scripter, PowerShell, vbScript, BAT, CMD

**Follow**
[](https://devblogs.microsoft.com/scripting/author/the-scripting-guys/feed/){.no-underline
.stayinformed .hvr-pop}

::: {style="clear:both"}
:::
:::
:::
:::
:::

[Posted in
[Scripting](https://devblogs.microsoft.com/scripting/category/scripting/)]{.cat-links}[Tagged
[getting
started](https://devblogs.microsoft.com/scripting/tag/getting-started/)
[Scripting
Guy!](https://devblogs.microsoft.com/scripting/tag/scripting-guy/)
[scripting
techniques](https://devblogs.microsoft.com/scripting/tag/scripting-techniques/)
[Windows
PowerShell](https://devblogs.microsoft.com/scripting/tag/windows-powershell/)]{.tags-links}

::: {.related-postssection role="region" aria-label="Related Post Section"}
##### Read next

::: {.row .related-articles}
::: {.post-card aria-label="Related Post Title"}
[Deciding Between One or Multiple PowerShell
Profiles](https://devblogs.microsoft.com/scripting/deciding-between-one-or-multiple-powershell-profiles/){.article-title}

::: {.post-desc}
Summary: Microsoft Scripting Guy, Ed Wilson, discusses some of the
decision points between using one or multiple Windows PowerShell
profiles.  Hey, Scripting Guy! OK\...
:::

::: {.author-details}
[[![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22102%22%20height=%22150%22%3E%3Crect%20fill-opacity=%220%22/%3E%3C/svg%3E){.avatar
.avatar-100 .photo .avatar-default .lazyloaded width="100"
height="100"}]{.avatar-img} [Doctor Scripto]{.author-name} [May 22,
2012]{.post-date}](https://devblogs.microsoft.com/scripting/author/the-scripting-guys/)
:::

::: {.post-comments}
0 comment
:::
:::

::: {.post-card aria-label="Related Post Title"}
[Use a Central File to Simplify Your PowerShell
Profile](https://devblogs.microsoft.com/scripting/use-a-central-file-to-simplify-your-powershell-profile/){.article-title}

::: {.post-desc}
Summary: Microsoft Scripting Guy, Ed Wilson, shows how to use a central
file to simplify configuring your Windows PowerShell profile.  Hey,
Scripting Guy! So can you\...
:::

::: {.author-details}
[[![](data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22102%22%20height=%22150%22%3E%3Crect%20fill-opacity=%220%22/%3E%3C/svg%3E){.avatar
.avatar-100 .photo .avatar-default .lazyloaded width="100"
height="100"}]{.avatar-img} [Doctor Scripto]{.author-name} [May 23,
2012]{.post-date}](https://devblogs.microsoft.com/scripting/author/the-scripting-guys/)
:::

::: {.post-comments}
0 comment
:::
:::
:::
:::

::: {#comments .comments-area}
2 comments {#comments .comments-title}
----------

Comments are closed. [Login to edit/delete your existing
comments](https://devblogs.microsoft.com/scripting/wp-login.php?redirect_to=https%3A%2F%2Fdevblogs.microsoft.com%2Fscripting%2Funderstanding-the-six-powershell-profiles%2F%23comments "Login to edit/delete your existing comments")

-   ::: {#li-comment-104}
    ::: {.comment-author .vcard}
    ![](data:image/jpeg;base64,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){.avatar
    .avatar-40 .photo .lazyloaded width="40" height="40"}
    :::

    [ Carl Walsh ]{.author-name} [ May 30, 2019 6:57 am ]{.comment-date}
    ::: {.comment-meta .commentmetadata}
    [ [[collapse this
    comment]{.sr-only}](https://devblogs.microsoft.com/scripting/understanding-the-six-powershell-profiles/ "collapse this comment")
    ]{#collapse-comment-104 .collapse-comment} [
    [](https://devblogs.microsoft.com/scripting/understanding-the-six-powershell-profiles/ "copy this comment link"){.copy-link-anchor}]{.copy-link}
    ::: {.copy-link-live role="region" aria-live="assertive"}
    :::
    :::

    ::: {#comment-text-104 .comment-content}
    It looks like this post got trashed by a weird find-replace of
    s/1/http:...q-sm.jpg/g.

    Maybe some script could fix it?
    ![😀](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PGNpcmNsZSBmaWxsPSIjRkZDQzREIiBjeD0iMTgiIGN5PSIxOCIgcj0iMTgiLz48cGF0aCBmaWxsPSIjNjY0NTAwIiBkPSJNMTggMjFjLTMuNjIzIDAtNi4wMjctLjQyMi05LTEtLjY3OS0uMTMxLTIgMC0yIDIgMCA0IDQuNTk1IDkgMTEgOSA2LjQwNCAwIDExLTUgMTEtOSAwLTItMS4zMjEtMi4xMzItMi0yLTIuOTczLjU3OC01LjM3NyAxLTkgMXoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNOSAyMnMzIDEgOSAxIDktMSA5LTEtMiA0LTkgNC05LTQtOS00eiIvPjxlbGxpcHNlIGZpbGw9IiM2NjQ1MDAiIGN4PSIxMiIgY3k9IjEzLjUiIHJ4PSIyLjUiIHJ5PSIzLjUiLz48ZWxsaXBzZSBmaWxsPSIjNjY0NTAwIiBjeD0iMjQiIGN5PSIxMy41IiByeD0iMi41IiByeT0iMy41Ii8+PC9zdmc+){.emoji}
    :::

    [ ]{.voting}
    ::: {.reply}
    :::
    :::

-   ::: {#li-comment-183}
    ::: {.comment-author .vcard}
    ![](data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==){.avatar
    .avatar-40 .photo .lazyloaded width="40" height="40"}
    :::

    [ Jim Harry ]{.author-name} [ September 13, 2019 8:10 am
    ]{.comment-date}
    ::: {.comment-meta .commentmetadata}
    [ [[collapse this
    comment]{.sr-only}](https://devblogs.microsoft.com/scripting/understanding-the-six-powershell-profiles/ "collapse this comment")
    ]{#collapse-comment-183 .collapse-comment} [
    [](https://devblogs.microsoft.com/scripting/understanding-the-six-powershell-profiles/ "copy this comment link"){.copy-link-anchor}]{.copy-link}
    ::: {.copy-link-live role="region" aria-live="assertive"}
    :::
    :::

    ::: {#comment-text-183 .comment-content}
    Interesting.  Used this to test all the paths at once:\
    \[code\]\
    "CurrentUserCurrentHost", "CurrentUserAllHosts",
    "AllUsersCurrentHost", "AllUsersAllHosts" \| % { \$profile."\$\_" }
    \| test-path\
    \[/code\]
    :::

    [ ]{.voting}
    ::: {.reply}
    :::
    :::
:::
:::
:::
:::
:::
:::

::: {#wrapper-footer .wrapper role="main"}
::: {.container aria-label="Recommended and Related"}
::: {.row}
::: {.col-lg-4 style="padding-bottom:10px"}
::: {.card .bottomleft aria-label="PowerShell Resources"}
::: {.card-body style="height:393px;padding-left:26px;padding-top:24px;padding-right:17px;margin-bottom:24px"}
##### PowerShell Resources {#powershell-resources .card-title}

::: {.card-text .listdisplay style="height:100%;width:100%;overflow-y:auto;overflow-x:hidden"}
[PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/)

[Scripting
Forums](https://social.technet.microsoft.com/Forums/en-US/home?forum=ITCG)

[PowerShell
Forums](https://social.technet.microsoft.com/Forums/en-US/home?forum=winserverpowershell)

[PowerShell on
TechCommunity](https://techcommunity.microsoft.com/t5/PowerShell/ct-p/WindowsPowerShell)

[PowerShell.org - Community Resource](https://powershell.org/)
:::
:::
:::
:::

::: {.col-lg-4 style="padding-bottom:10px"}
::: {.card .bottomcenter aria-label="Topics"}
::: {.card-body style="height:393px;padding-left:26px;padding-top:24px;padding-right:17px;margin-bottom:24px"}
##### Topics {#topics .card-title}

::: {.card-text .listdisplay style="height:100%;width:100%;overflow-y:auto;overflow-x:hidden"}
[.csv](https://devblogs.microsoft.com/scripting/tag/csv/ "View all posts in .csv"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[.NET](https://devblogs.microsoft.com/scripting/tag/net/ "View all posts in .NET"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[.NET
Core](https://devblogs.microsoft.com/scripting/tag/net-core/ "View all posts in .NET Core"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[.NET
Framework](https://devblogs.microsoft.com/scripting/tag/net-framework/ "View all posts in .NET Framework"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[2009 Summer Scripting
Games](https://devblogs.microsoft.com/scripting/tag/2009-summer-scripting-games/ "View all posts in 2009 Summer Scripting Games"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[2010 Scripting
Games](https://devblogs.microsoft.com/scripting/tag/2010-scripting-games/ "View all posts in 2010 Scripting Games"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[2011 Scripting
Games](https://devblogs.microsoft.com/scripting/tag/2011-scripting-games/ "View all posts in 2011 Scripting Games"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[2012 Scripting
Games](https://devblogs.microsoft.com/scripting/tag/2012-scripting-games/ "View all posts in 2012 Scripting Games"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[2013 Scripting
Games](https://devblogs.microsoft.com/scripting/tag/2013-scripting-games/ "View all posts in 2013 Scripting Games"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[2014 Scripting
Games](https://devblogs.microsoft.com/scripting/tag/2014-scripting-games/ "View all posts in 2014 Scripting Games"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[2014 Winter Scripting
Games](https://devblogs.microsoft.com/scripting/tag/2014-winter-scripting-games/ "View all posts in 2014 Winter Scripting Games"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[2015 Holiday
Series](https://devblogs.microsoft.com/scripting/tag/2015-holiday-series/ "View all posts in 2015 Holiday Series"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[4.0](https://devblogs.microsoft.com/scripting/tag/4-0/ "View all posts in 4.0"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[70-410](https://devblogs.microsoft.com/scripting/tag/70-410/ "View all posts in 70-410"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Aaron
Nelson](https://devblogs.microsoft.com/scripting/tag/aaron-nelson/ "View all posts in Aaron Nelson"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Access.Application](https://devblogs.microsoft.com/scripting/tag/access-application/ "View all posts in Access.Application"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[ACLs](https://devblogs.microsoft.com/scripting/tag/acls/ "View all posts in ACLs"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[activation](https://devblogs.microsoft.com/scripting/tag/activation/ "View all posts in activation"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Active
Directory](https://devblogs.microsoft.com/scripting/tag/active-directory/ "View all posts in Active Directory"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Active Directory Application
Mode
(ADAM)](https://devblogs.microsoft.com/scripting/tag/active-directory-application-mode-adam/ "View all posts in Active Directory Application Mode (ADAM)"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[ActiveX Data Objects
(ADO)](https://devblogs.microsoft.com/scripting/tag/activex-data-objects-ado/ "View all posts in ActiveX Data Objects (ADO)"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Adam
Bertram](https://devblogs.microsoft.com/scripting/tag/adam-bertram/ "View all posts in Adam Bertram"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Adam
Driscoll](https://devblogs.microsoft.com/scripting/tag/adam-driscoll/ "View all posts in Adam Driscoll"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Adam
Haynes](https://devblogs.microsoft.com/scripting/tag/adam-haynes/ "View all posts in Adam Haynes"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Admin First
Steps](https://devblogs.microsoft.com/scripting/tag/admin-first-steps/ "View all posts in Admin First Steps"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[ADO.NET](https://devblogs.microsoft.com/scripting/tag/ado-net/ "View all posts in ADO.NET"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[ADODB.Recordset](https://devblogs.microsoft.com/scripting/tag/adodb-recordset/ "View all posts in ADODB.Recordset"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[ADOR.Recordset](https://devblogs.microsoft.com/scripting/tag/ador-recordset/ "View all posts in ADOR.Recordset"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[ADSI](https://devblogs.microsoft.com/scripting/tag/adsi/ "View all posts in ADSI"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Advanced](https://devblogs.microsoft.com/scripting/tag/advanced/ "View all posts in Advanced"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Advanced Event
1](https://devblogs.microsoft.com/scripting/tag/advanced-event-1/ "View all posts in Advanced Event 1"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Advanced Event
10](https://devblogs.microsoft.com/scripting/tag/advanced-event-10/ "View all posts in Advanced Event 10"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Advanced Event
2](https://devblogs.microsoft.com/scripting/tag/advanced-event-2/ "View all posts in Advanced Event 2"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Advanced Event
3](https://devblogs.microsoft.com/scripting/tag/advanced-event-3/ "View all posts in Advanced Event 3"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Advanced Event
4](https://devblogs.microsoft.com/scripting/tag/advanced-event-4/ "View all posts in Advanced Event 4"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Advanced Event
5](https://devblogs.microsoft.com/scripting/tag/advanced-event-5/ "View all posts in Advanced Event 5"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Advanced Event
6](https://devblogs.microsoft.com/scripting/tag/advanced-event-6/ "View all posts in Advanced Event 6"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Advanced Event
7](https://devblogs.microsoft.com/scripting/tag/advanced-event-7/ "View all posts in Advanced Event 7"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Advanced Event
8](https://devblogs.microsoft.com/scripting/tag/advanced-event-8/ "View all posts in Advanced Event 8"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Advanced Event
9](https://devblogs.microsoft.com/scripting/tag/advanced-event-9/ "View all posts in Advanced Event 9"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Advanced
Functions](https://devblogs.microsoft.com/scripting/tag/advanced-functions/ "View all posts in Advanced Functions"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Alan
Byrne](https://devblogs.microsoft.com/scripting/tag/alan-byrne/ "View all posts in Alan Byrne"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Alan
Morris](https://devblogs.microsoft.com/scripting/tag/alan-morris/ "View all posts in Alan Morris"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Alex
Verboon](https://devblogs.microsoft.com/scripting/tag/alex-verboon/ "View all posts in Alex Verboon"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[and
jobs](https://devblogs.microsoft.com/scripting/tag/and-jobs/ "View all posts in and jobs"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Anders
Wahlqvist](https://devblogs.microsoft.com/scripting/tag/anders-wahlqvist/ "View all posts in Anders Wahlqvist"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Android](https://devblogs.microsoft.com/scripting/tag/android/ "View all posts in Android"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Andy
Schneider](https://devblogs.microsoft.com/scripting/tag/andy-schneider/ "View all posts in Andy Schneider"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[anonymous](https://devblogs.microsoft.com/scripting/tag/anonymous/ "View all posts in anonymous"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Antivirus](https://devblogs.microsoft.com/scripting/tag/antivirus/ "View all posts in Antivirus"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[App-V](https://devblogs.microsoft.com/scripting/tag/app-v/ "View all posts in App-V"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[applications](https://devblogs.microsoft.com/scripting/tag/applications/ "View all posts in applications"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Arnaud
Petitjean](https://devblogs.microsoft.com/scripting/tag/arnaud-petitjean/ "View all posts in Arnaud Petitjean"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Array](https://devblogs.microsoft.com/scripting/tag/array/ "View all posts in Array"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Arrays](https://devblogs.microsoft.com/scripting/tag/arrays/ "View all posts in Arrays"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[arrays hash
tables](https://devblogs.microsoft.com/scripting/tag/arrays-hash-tables/ "View all posts in arrays hash tables"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[arrays hash tables and
dictionary
objects](https://devblogs.microsoft.com/scripting/tag/arrays-hash-tables-and-dictionary-objects/ "View all posts in arrays hash tables and dictionary objects"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[arrays hashtables and
dictionary
objects](https://devblogs.microsoft.com/scripting/tag/arrays-hashtables-and-dictionary-objects/ "View all posts in arrays hashtables and dictionary objects"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[ASCII](https://devblogs.microsoft.com/scripting/tag/ascii/ "View all posts in ASCII"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Ashley
McGlone](https://devblogs.microsoft.com/scripting/tag/ashley-mcglone/ "View all posts in Ashley McGlone"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Asia
Gandecka](https://devblogs.microsoft.com/scripting/tag/asia-gandecka/ "View all posts in Asia Gandecka"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[ASP.NET
Core](https://devblogs.microsoft.com/scripting/tag/asp-net-core/ "View all posts in ASP.NET Core"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[associators
of](https://devblogs.microsoft.com/scripting/tag/associators-of/ "View all posts in associators of"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Attributes](https://devblogs.microsoft.com/scripting/tag/attributes/ "View all posts in Attributes"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Audio](https://devblogs.microsoft.com/scripting/tag/audio/ "View all posts in Audio"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Authors](https://devblogs.microsoft.com/scripting/tag/authors/ "View all posts in Authors"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Automatic
Variables](https://devblogs.microsoft.com/scripting/tag/automatic-variables/ "View all posts in Automatic Variables"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Automation](https://devblogs.microsoft.com/scripting/tag/automation/ "View all posts in Automation"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Azure](https://devblogs.microsoft.com/scripting/tag/azure/ "View all posts in Azure"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Azure
Automation](https://devblogs.microsoft.com/scripting/tag/azure-automation/ "View all posts in Azure Automation"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[AzureAD](https://devblogs.microsoft.com/scripting/tag/azuread/ "View all posts in AzureAD"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[background
jobs](https://devblogs.microsoft.com/scripting/tag/background-jobs/ "View all posts in background jobs"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[backup](https://devblogs.microsoft.com/scripting/tag/backup/ "View all posts in backup"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[backup and system
restore](https://devblogs.microsoft.com/scripting/tag/backup-and-system-restore/ "View all posts in backup and system restore"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[badge](https://devblogs.microsoft.com/scripting/tag/badge/ "View all posts in badge"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Bartek
Bielawski](https://devblogs.microsoft.com/scripting/tag/bartek-bielawski/ "View all posts in Bartek Bielawski"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Bash](https://devblogs.microsoft.com/scripting/tag/bash/ "View all posts in Bash"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[basic computer
information](https://devblogs.microsoft.com/scripting/tag/basic-computer-information/ "View all posts in basic computer information"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[basic hardware and
firmware](https://devblogs.microsoft.com/scripting/tag/basic-hardware-and-firmware/ "View all posts in basic hardware and firmware"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Basic Hardware
information](https://devblogs.microsoft.com/scripting/tag/basic-hardware-information/ "View all posts in Basic Hardware information"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[basic
information](https://devblogs.microsoft.com/scripting/tag/basic-information/ "View all posts in basic information"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Basics](https://devblogs.microsoft.com/scripting/tag/basics/ "View all posts in Basics"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[BATCHman](https://devblogs.microsoft.com/scripting/tag/batchman/ "View all posts in BATCHman"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[batteries and power
supplies](https://devblogs.microsoft.com/scripting/tag/batteries-and-power-supplies/ "View all posts in batteries and power supplies"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Beginner](https://devblogs.microsoft.com/scripting/tag/beginner/ "View all posts in Beginner"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Beginner Event
1](https://devblogs.microsoft.com/scripting/tag/beginner-event-1/ "View all posts in Beginner Event 1"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Beginner Event
10](https://devblogs.microsoft.com/scripting/tag/beginner-event-10/ "View all posts in Beginner Event 10"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Beginner Event
2](https://devblogs.microsoft.com/scripting/tag/beginner-event-2/ "View all posts in Beginner Event 2"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Beginner Event
3](https://devblogs.microsoft.com/scripting/tag/beginner-event-3/ "View all posts in Beginner Event 3"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Beginner Event
4](https://devblogs.microsoft.com/scripting/tag/beginner-event-4/ "View all posts in Beginner Event 4"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Beginner Event
5](https://devblogs.microsoft.com/scripting/tag/beginner-event-5/ "View all posts in Beginner Event 5"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Beginner Event
6](https://devblogs.microsoft.com/scripting/tag/beginner-event-6/ "View all posts in Beginner Event 6"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Beginner Event
7](https://devblogs.microsoft.com/scripting/tag/beginner-event-7/ "View all posts in Beginner Event 7"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Beginner Event
8](https://devblogs.microsoft.com/scripting/tag/beginner-event-8/ "View all posts in Beginner Event 8"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Beginner Event
9](https://devblogs.microsoft.com/scripting/tag/beginner-event-9/ "View all posts in Beginner Event 9"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Ben
Pearce](https://devblogs.microsoft.com/scripting/tag/ben-pearce/ "View all posts in Ben Pearce"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Ben
Vierck](https://devblogs.microsoft.com/scripting/tag/ben-vierck/ "View all posts in Ben Vierck"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Best
Practice](https://devblogs.microsoft.com/scripting/tag/best-practice/ "View all posts in Best Practice"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[best
practices](https://devblogs.microsoft.com/scripting/tag/best-practices/ "View all posts in best practices"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Bhargav
Shukla](https://devblogs.microsoft.com/scripting/tag/bhargav-shukla/ "View all posts in Bhargav Shukla"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Bill
Grauer](https://devblogs.microsoft.com/scripting/tag/bill-grauer/ "View all posts in Bill Grauer"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Bill
Stewart](https://devblogs.microsoft.com/scripting/tag/bill-stewart/ "View all posts in Bill Stewart"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[BitLocker](https://devblogs.microsoft.com/scripting/tag/bitlocker/ "View all posts in BitLocker"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[BITS](https://devblogs.microsoft.com/scripting/tag/bits/ "View all posts in BITS"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Bob
Stevens](https://devblogs.microsoft.com/scripting/tag/bob-stevens/ "View all posts in Bob Stevens"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Boe
Prox](https://devblogs.microsoft.com/scripting/tag/boe-prox/ "View all posts in Boe Prox"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Brandon
Shell](https://devblogs.microsoft.com/scripting/tag/brandon-shell/ "View all posts in Brandon Shell"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[breakpoint](https://devblogs.microsoft.com/scripting/tag/breakpoint/ "View all posts in breakpoint"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Brent
Forman](https://devblogs.microsoft.com/scripting/tag/brent-forman/ "View all posts in Brent Forman"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Brian
Hitney](https://devblogs.microsoft.com/scripting/tag/brian-hitney/ "View all posts in Brian Hitney"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Brian
Jackett](https://devblogs.microsoft.com/scripting/tag/brian-jackett/ "View all posts in Brian Jackett"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Brian
Lalancette](https://devblogs.microsoft.com/scripting/tag/brian-lalancette/ "View all posts in Brian Lalancette"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Brian
Wilhite](https://devblogs.microsoft.com/scripting/tag/brian-wilhite/ "View all posts in Brian Wilhite"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Brian
Wren](https://devblogs.microsoft.com/scripting/tag/brian-wren/ "View all posts in Brian Wren"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Bruce
Payette](https://devblogs.microsoft.com/scripting/tag/bruce-payette/ "View all posts in Bruce Payette"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Buck
Woody](https://devblogs.microsoft.com/scripting/tag/buck-woody/ "View all posts in Buck Woody"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Build your own
cmdlet](https://devblogs.microsoft.com/scripting/tag/build-your-own-cmdlet/ "View all posts in Build your own cmdlet"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[C\#](https://devblogs.microsoft.com/scripting/tag/c/ "View all posts in C#"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Certificate](https://devblogs.microsoft.com/scripting/tag/certificate/ "View all posts in Certificate"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[certificates](https://devblogs.microsoft.com/scripting/tag/certificates/ "View all posts in certificates"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Chad
Miller](https://devblogs.microsoft.com/scripting/tag/chad-miller/ "View all posts in Chad Miller"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[change
journal](https://devblogs.microsoft.com/scripting/tag/change-journal/ "View all posts in change journal"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Chendrayan
Venkatesan](https://devblogs.microsoft.com/scripting/tag/chendrayan-venkatesan/ "View all posts in Chendrayan Venkatesan"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Chris
Bellee](https://devblogs.microsoft.com/scripting/tag/chris-bellee/ "View all posts in Chris Bellee"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Chris
Campbell](https://devblogs.microsoft.com/scripting/tag/chris-campbell/ "View all posts in Chris Campbell"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Chris
Conte](https://devblogs.microsoft.com/scripting/tag/chris-conte/ "View all posts in Chris Conte"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Chris
Dent](https://devblogs.microsoft.com/scripting/tag/chris-dent/ "View all posts in Chris Dent"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Chris
O\'Prey](https://devblogs.microsoft.com/scripting/tag/chris-oprey/ "View all posts in Chris O'Prey"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Chris
Weaver](https://devblogs.microsoft.com/scripting/tag/chris-weaver/ "View all posts in Chris Weaver"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Chris
Wu](https://devblogs.microsoft.com/scripting/tag/chris-wu/ "View all posts in Chris Wu"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Chrissy
LeMaire](https://devblogs.microsoft.com/scripting/tag/chrissy-lemaire/ "View all posts in Chrissy LeMaire"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Christopher
Weaver](https://devblogs.microsoft.com/scripting/tag/christopher-weaver/ "View all posts in Christopher Weaver"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[CIM](https://devblogs.microsoft.com/scripting/tag/cim/ "View all posts in CIM"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Classes](https://devblogs.microsoft.com/scripting/tag/classes/ "View all posts in Classes"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Claudia
Ferguson](https://devblogs.microsoft.com/scripting/tag/claudia-ferguson/ "View all posts in Claudia Ferguson"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[client
applications](https://devblogs.microsoft.com/scripting/tag/client-applications/ "View all posts in client applications"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[client-side
management](https://devblogs.microsoft.com/scripting/tag/client-side-management/ "View all posts in client-side management"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[client-side
printing](https://devblogs.microsoft.com/scripting/tag/client-side-printing/ "View all posts in client-side printing"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Clint
Huffman](https://devblogs.microsoft.com/scripting/tag/clint-huffman/ "View all posts in Clint Huffman"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Clinton
Knight](https://devblogs.microsoft.com/scripting/tag/clinton-knight/ "View all posts in Clinton Knight"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[cloud](https://devblogs.microsoft.com/scripting/tag/cloud/ "View all posts in cloud"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Cloud
Services](https://devblogs.microsoft.com/scripting/tag/cloud-services/ "View all posts in Cloud Services"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Color](https://devblogs.microsoft.com/scripting/tag/color/ "View all posts in Color"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[COM](https://devblogs.microsoft.com/scripting/tag/com/ "View all posts in COM"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[COM and
DCOM](https://devblogs.microsoft.com/scripting/tag/com-and-dcom/ "View all posts in COM and DCOM"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Comma and other deliminited
files](https://devblogs.microsoft.com/scripting/tag/comma-and-other-deliminited-files/ "View all posts in Comma and other deliminited files"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Comma and other delimited
files](https://devblogs.microsoft.com/scripting/tag/comma-and-other-delimited-files/ "View all posts in Comma and other delimited files"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Comma separated and other
delimited
files](https://devblogs.microsoft.com/scripting/tag/comma-separated-and-other-delimited-files/ "View all posts in Comma separated and other delimited files"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[comments](https://devblogs.microsoft.com/scripting/tag/comments/ "View all posts in comments"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[community](https://devblogs.microsoft.com/scripting/tag/community/ "View all posts in community"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Compare-Object](https://devblogs.microsoft.com/scripting/tag/compare-object/ "View all posts in Compare-Object"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[compressed
files](https://devblogs.microsoft.com/scripting/tag/compressed-files/ "View all posts in compressed files"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[computer
accounts](https://devblogs.microsoft.com/scripting/tag/computer-accounts/ "View all posts in computer accounts"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Computers](https://devblogs.microsoft.com/scripting/tag/computers/ "View all posts in Computers"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Configuration
Manager](https://devblogs.microsoft.com/scripting/tag/configuration-manager/ "View all posts in Configuration Manager"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Connect](https://devblogs.microsoft.com/scripting/tag/connect/ "View all posts in Connect"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[console](https://devblogs.microsoft.com/scripting/tag/console/ "View all posts in console"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Continuous
Delivery](https://devblogs.microsoft.com/scripting/tag/continuous-delivery/ "View all posts in Continuous Delivery"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Continuous
Integration](https://devblogs.microsoft.com/scripting/tag/continuous-integration/ "View all posts in Continuous Integration"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Corey
Roth](https://devblogs.microsoft.com/scripting/tag/corey-roth/ "View all posts in Corey Roth"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[CPU](https://devblogs.microsoft.com/scripting/tag/cpu/ "View all posts in CPU"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Credential
Guard](https://devblogs.microsoft.com/scripting/tag/credential-guard/ "View all posts in Credential Guard"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Cryptography](https://devblogs.microsoft.com/scripting/tag/cryptography/ "View all posts in Cryptography"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[CSV and other delimited
files](https://devblogs.microsoft.com/scripting/tag/csv-and-other-delimited-files/ "View all posts in CSV and other delimited files"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[DACLS and
SACLS](https://devblogs.microsoft.com/scripting/tag/dacls-and-sacls/ "View all posts in DACLS and SACLS"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Dan
Reist](https://devblogs.microsoft.com/scripting/tag/dan-reist/ "View all posts in Dan Reist"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Dan
Sheehan](https://devblogs.microsoft.com/scripting/tag/dan-sheehan/ "View all posts in Dan Sheehan"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Daniel
Cruz](https://devblogs.microsoft.com/scripting/tag/daniel-cruz/ "View all posts in Daniel Cruz"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Data](https://devblogs.microsoft.com/scripting/tag/data/ "View all posts in Data"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[databases](https://devblogs.microsoft.com/scripting/tag/databases/ "View all posts in databases"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[DataGrid](https://devblogs.microsoft.com/scripting/tag/datagrid/ "View all posts in DataGrid"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[dates](https://devblogs.microsoft.com/scripting/tag/dates/ "View all posts in dates"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[dates and
times](https://devblogs.microsoft.com/scripting/tag/dates-and-times/ "View all posts in dates and times"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Dave
Bishop](https://devblogs.microsoft.com/scripting/tag/dave-bishop/ "View all posts in Dave Bishop"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Dave
Wyatt](https://devblogs.microsoft.com/scripting/tag/dave-wyatt/ "View all posts in Dave Wyatt"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[David
Moravec](https://devblogs.microsoft.com/scripting/tag/david-moravec/ "View all posts in David Moravec"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[David
O'Brien](https://devblogs.microsoft.com/scripting/tag/david-obrien/ "View all posts in David O’Brien"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[debug](https://devblogs.microsoft.com/scripting/tag/debug/ "View all posts in debug"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[debugger](https://devblogs.microsoft.com/scripting/tag/debugger/ "View all posts in debugger"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[debugging](https://devblogs.microsoft.com/scripting/tag/debugging/ "View all posts in debugging"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Debugging and
Diagnostics](https://devblogs.microsoft.com/scripting/tag/debugging-and-diagnostics/ "View all posts in Debugging and Diagnostics"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Defender](https://devblogs.microsoft.com/scripting/tag/defender/ "View all posts in Defender"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Dennis
Whitney](https://devblogs.microsoft.com/scripting/tag/dennis-whitney/ "View all posts in Dennis Whitney"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Deployment and
Upgrade](https://devblogs.microsoft.com/scripting/tag/deployment-and-upgrade/ "View all posts in Deployment and Upgrade"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Desktop](https://devblogs.microsoft.com/scripting/tag/desktop/ "View all posts in Desktop"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[desktop
management](https://devblogs.microsoft.com/scripting/tag/desktop-management/ "View all posts in desktop management"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Desktop
Mgmt](https://devblogs.microsoft.com/scripting/tag/desktop-mgmt/ "View all posts in Desktop Mgmt"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Desktop
Tasks](https://devblogs.microsoft.com/scripting/tag/desktop-tasks/ "View all posts in Desktop Tasks"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[DHCP](https://devblogs.microsoft.com/scripting/tag/dhcp/ "View all posts in DHCP"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[DHCP
server](https://devblogs.microsoft.com/scripting/tag/dhcp-server/ "View all posts in DHCP server"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Dia
Reeves](https://devblogs.microsoft.com/scripting/tag/dia-reeves/ "View all posts in Dia Reeves"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[dialog
boxes](https://devblogs.microsoft.com/scripting/tag/dialog-boxes/ "View all posts in dialog boxes"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[directories](https://devblogs.microsoft.com/scripting/tag/directories/ "View all posts in directories"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Directory](https://devblogs.microsoft.com/scripting/tag/directory/ "View all posts in Directory"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[disk drives and
volumes](https://devblogs.microsoft.com/scripting/tag/disk-drives-and-volumes/ "View all posts in disk drives and volumes"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[disk
quotas](https://devblogs.microsoft.com/scripting/tag/disk-quotas/ "View all posts in disk quotas"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Disks](https://devblogs.microsoft.com/scripting/tag/disks/ "View all posts in Disks"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[DISM](https://devblogs.microsoft.com/scripting/tag/dism/ "View all posts in DISM"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[displaying
output](https://devblogs.microsoft.com/scripting/tag/displaying-output/ "View all posts in displaying output"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[DNS](https://devblogs.microsoft.com/scripting/tag/dns/ "View all posts in DNS"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[DNS
server](https://devblogs.microsoft.com/scripting/tag/dns-server/ "View all posts in DNS server"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Docker](https://devblogs.microsoft.com/scripting/tag/docker/ "View all posts in Docker"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Doctor
Scripto](https://devblogs.microsoft.com/scripting/tag/doctor-scripto/ "View all posts in Doctor Scripto"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Domain
Controllers](https://devblogs.microsoft.com/scripting/tag/domain-controllers/ "View all posts in Domain Controllers"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[domains](https://devblogs.microsoft.com/scripting/tag/domains/ "View all posts in domains"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Don
Gill](https://devblogs.microsoft.com/scripting/tag/don-gill/ "View all posts in Don Gill"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Don
Jones](https://devblogs.microsoft.com/scripting/tag/don-jones/ "View all posts in Don Jones"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Don
Walker](https://devblogs.microsoft.com/scripting/tag/don-walker/ "View all posts in Don Walker"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Doug
Finke](https://devblogs.microsoft.com/scripting/tag/doug-finke/ "View all posts in Doug Finke"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[downloading
files](https://devblogs.microsoft.com/scripting/tag/downloading-files/ "View all posts in downloading files"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[DSC](https://devblogs.microsoft.com/scripting/tag/dsc/ "View all posts in DSC"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[due
dates](https://devblogs.microsoft.com/scripting/tag/due-dates/ "View all posts in due dates"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[ed
wilson](https://devblogs.microsoft.com/scripting/tag/ed-wilson/ "View all posts in ed wilson"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Edge](https://devblogs.microsoft.com/scripting/tag/edge/ "View all posts in Edge"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[editor](https://devblogs.microsoft.com/scripting/tag/editor/ "View all posts in editor"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[endpoint](https://devblogs.microsoft.com/scripting/tag/endpoint/ "View all posts in endpoint"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[enum](https://devblogs.microsoft.com/scripting/tag/enum/ "View all posts in enum"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Enums](https://devblogs.microsoft.com/scripting/tag/enums/ "View all posts in Enums"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Environment](https://devblogs.microsoft.com/scripting/tag/environment/ "View all posts in Environment"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[environmental
variable](https://devblogs.microsoft.com/scripting/tag/environmental-variable/ "View all posts in environmental variable"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Eric
Wright](https://devblogs.microsoft.com/scripting/tag/eric-wright/ "View all posts in Eric Wright"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[error
handling](https://devblogs.microsoft.com/scripting/tag/error-handling/ "View all posts in error handling"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Event
1](https://devblogs.microsoft.com/scripting/tag/event-1/ "View all posts in Event 1"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Event
10](https://devblogs.microsoft.com/scripting/tag/event-10/ "View all posts in Event 10"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Event
2](https://devblogs.microsoft.com/scripting/tag/event-2/ "View all posts in Event 2"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Event
3](https://devblogs.microsoft.com/scripting/tag/event-3/ "View all posts in Event 3"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Event
4](https://devblogs.microsoft.com/scripting/tag/event-4/ "View all posts in Event 4"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Event
5](https://devblogs.microsoft.com/scripting/tag/event-5/ "View all posts in Event 5"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Event
6](https://devblogs.microsoft.com/scripting/tag/event-6/ "View all posts in Event 6"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Event
7](https://devblogs.microsoft.com/scripting/tag/event-7/ "View all posts in Event 7"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Event
8](https://devblogs.microsoft.com/scripting/tag/event-8/ "View all posts in Event 8"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Event
9](https://devblogs.microsoft.com/scripting/tag/event-9/ "View all posts in Event 9"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[event
logs](https://devblogs.microsoft.com/scripting/tag/event-logs/ "View all posts in event logs"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[event logs and
monitoring](https://devblogs.microsoft.com/scripting/tag/event-logs-and-monitoring/ "View all posts in event logs and monitoring"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Eventing and
Monitoring](https://devblogs.microsoft.com/scripting/tag/eventing-and-monitoring/ "View all posts in Eventing and Monitoring"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Events](https://devblogs.microsoft.com/scripting/tag/events/ "View all posts in Events"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Events and
Logging](https://devblogs.microsoft.com/scripting/tag/events-and-logging/ "View all posts in Events and Logging"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[events and
monitoring](https://devblogs.microsoft.com/scripting/tag/events-and-monitoring/ "View all posts in events and monitoring"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Excel
spreadsheet](https://devblogs.microsoft.com/scripting/tag/excel-spreadsheet/ "View all posts in Excel spreadsheet"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Excel.Application](https://devblogs.microsoft.com/scripting/tag/excel-application/ "View all posts in Excel.Application"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Exchange](https://devblogs.microsoft.com/scripting/tag/exchange/ "View all posts in Exchange"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Exchange
2010](https://devblogs.microsoft.com/scripting/tag/exchange-2010/ "View all posts in Exchange 2010"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Exchange
Online](https://devblogs.microsoft.com/scripting/tag/exchange-online/ "View all posts in Exchange Online"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[expert
commentators](https://devblogs.microsoft.com/scripting/tag/expert-commentators/ "View all posts in expert commentators"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Extensions](https://devblogs.microsoft.com/scripting/tag/extensions/ "View all posts in Extensions"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[F\#](https://devblogs.microsoft.com/scripting/tag/f/ "View all posts in F#"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Facebook](https://devblogs.microsoft.com/scripting/tag/facebook/ "View all posts in Facebook"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[faq](https://devblogs.microsoft.com/scripting/tag/faq/ "View all posts in faq"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[FAST ESP 5.3
SP3](https://devblogs.microsoft.com/scripting/tag/fast-esp-5-3-sp3/ "View all posts in FAST ESP 5.3 SP3"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[File](https://devblogs.microsoft.com/scripting/tag/file/ "View all posts in File"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[files](https://devblogs.microsoft.com/scripting/tag/files/ "View all posts in files"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[files and
folders](https://devblogs.microsoft.com/scripting/tag/files-and-folders/ "View all posts in files and folders"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[filesystem](https://devblogs.microsoft.com/scripting/tag/filesystem/ "View all posts in filesystem"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[FileSystemObject](https://devblogs.microsoft.com/scripting/tag/filesystemobject/ "View all posts in FileSystemObject"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[firewall](https://devblogs.microsoft.com/scripting/tag/firewall/ "View all posts in firewall"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[folders](https://devblogs.microsoft.com/scripting/tag/folders/ "View all posts in folders"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Formatting
output](https://devblogs.microsoft.com/scripting/tag/formatting-output/ "View all posts in Formatting output"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[functions](https://devblogs.microsoft.com/scripting/tag/functions/ "View all posts in functions"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Fundamentals](https://devblogs.microsoft.com/scripting/tag/fundamentals/ "View all posts in Fundamentals"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Gary
Jackson](https://devblogs.microsoft.com/scripting/tag/gary-jackson/ "View all posts in Gary Jackson"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Gary
Siepser](https://devblogs.microsoft.com/scripting/tag/gary-siepser/ "View all posts in Gary Siepser"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[General
Management](https://devblogs.microsoft.com/scripting/tag/general-management/ "View all posts in General Management"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[general management
tasks](https://devblogs.microsoft.com/scripting/tag/general-management-tasks/ "View all posts in general management tasks"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[General Mgmt
Tasks](https://devblogs.microsoft.com/scripting/tag/general-mgmt-tasks/ "View all posts in General Mgmt Tasks"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Georges
Maheu](https://devblogs.microsoft.com/scripting/tag/georges-maheu/ "View all posts in Georges Maheu"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Gershon
Levitz](https://devblogs.microsoft.com/scripting/tag/gershon-levitz/ "View all posts in Gershon Levitz"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Get-Random](https://devblogs.microsoft.com/scripting/tag/get-random/ "View all posts in Get-Random"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[getting
started](https://devblogs.microsoft.com/scripting/tag/getting-started/ "View all posts in getting started"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Glenn
Sizemore](https://devblogs.microsoft.com/scripting/tag/glenn-sizemore/ "View all posts in Glenn Sizemore"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Glyn
Clough](https://devblogs.microsoft.com/scripting/tag/glyn-clough/ "View all posts in Glyn Clough"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[graphical](https://devblogs.microsoft.com/scripting/tag/graphical/ "View all posts in graphical"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[graphics](https://devblogs.microsoft.com/scripting/tag/graphics/ "View all posts in graphics"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Greg
Lindsay](https://devblogs.microsoft.com/scripting/tag/greg-lindsay/ "View all posts in Greg Lindsay"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Group
Policy](https://devblogs.microsoft.com/scripting/tag/group-policy/ "View all posts in Group Policy"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Grouping](https://devblogs.microsoft.com/scripting/tag/grouping/ "View all posts in Grouping"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[groups](https://devblogs.microsoft.com/scripting/tag/groups/ "View all posts in groups"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[guest
blogger](https://devblogs.microsoft.com/scripting/tag/guest-blogger/ "View all posts in guest blogger"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[GuestBlogger](https://devblogs.microsoft.com/scripting/tag/guestblogger/ "View all posts in GuestBlogger"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[GUI](https://devblogs.microsoft.com/scripting/tag/gui/ "View all posts in GUI"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[hardware](https://devblogs.microsoft.com/scripting/tag/hardware/ "View all posts in hardware"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[hash](https://devblogs.microsoft.com/scripting/tag/hash/ "View all posts in hash"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[hash
tables](https://devblogs.microsoft.com/scripting/tag/hash-tables/ "View all posts in hash tables"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[HashTables](https://devblogs.microsoft.com/scripting/tag/hashtables/ "View all posts in HashTables"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[hashtables and dictionary
objects](https://devblogs.microsoft.com/scripting/tag/hashtables-and-dictionary-objects/ "View all posts in hashtables and dictionary objects"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Heath
Lawson](https://devblogs.microsoft.com/scripting/tag/heath-lawson/ "View all posts in Heath Lawson"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Help](https://devblogs.microsoft.com/scripting/tag/help/ "View all posts in Help"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Hey Scripting
Guy](https://devblogs.microsoft.com/scripting/tag/hey-scripting-guy/ "View all posts in Hey Scripting Guy"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Historical
Debugging](https://devblogs.microsoft.com/scripting/tag/historical-debugging/ "View all posts in Historical Debugging"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[History](https://devblogs.microsoft.com/scripting/tag/history/ "View all posts in History"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[holiday
2013](https://devblogs.microsoft.com/scripting/tag/holiday-2013/ "View all posts in holiday 2013"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Honorary Scripting
Guys](https://devblogs.microsoft.com/scripting/tag/honorary-scripting-guys/ "View all posts in Honorary Scripting Guys"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Hyper-V](https://devblogs.microsoft.com/scripting/tag/hyper-v/ "View all posts in Hyper-V"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[HyperV](https://devblogs.microsoft.com/scripting/tag/hyperv/ "View all posts in HyperV"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[I was
there](https://devblogs.microsoft.com/scripting/tag/i-was-there/ "View all posts in I was there"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Ian
Farr](https://devblogs.microsoft.com/scripting/tag/ian-farr/ "View all posts in Ian Farr"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[ignite](https://devblogs.microsoft.com/scripting/tag/ignite/ "View all posts in ignite"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Ignite
2015](https://devblogs.microsoft.com/scripting/tag/ignite-2015/ "View all posts in Ignite 2015"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Ignite
2016](https://devblogs.microsoft.com/scripting/tag/ignite-2016/ "View all posts in Ignite 2016"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[IIS](https://devblogs.microsoft.com/scripting/tag/iis/ "View all posts in IIS"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Ingo
Karstein](https://devblogs.microsoft.com/scripting/tag/ingo-karstein/ "View all posts in Ingo Karstein"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[input](https://devblogs.microsoft.com/scripting/tag/input/ "View all posts in input"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Install](https://devblogs.microsoft.com/scripting/tag/install/ "View all posts in Install"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Intellisense](https://devblogs.microsoft.com/scripting/tag/intellisense/ "View all posts in Intellisense"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[internet](https://devblogs.microsoft.com/scripting/tag/internet/ "View all posts in internet"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Internet
Explorer](https://devblogs.microsoft.com/scripting/tag/internet-explorer/ "View all posts in Internet Explorer"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Internet Explorer
7](https://devblogs.microsoft.com/scripting/tag/internet-explorer-7/ "View all posts in Internet Explorer 7"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Internet
Search](https://devblogs.microsoft.com/scripting/tag/internet-search/ "View all posts in Internet Search"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Invoke-RestMethod](https://devblogs.microsoft.com/scripting/tag/invoke-restmethod/ "View all posts in Invoke-RestMethod"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Invoke-WebRequest](https://devblogs.microsoft.com/scripting/tag/invoke-webrequest/ "View all posts in Invoke-WebRequest"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[iOS](https://devblogs.microsoft.com/scripting/tag/ios/ "View all posts in iOS"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[IoT](https://devblogs.microsoft.com/scripting/tag/iot/ "View all posts in IoT"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[ISE](https://devblogs.microsoft.com/scripting/tag/ise/ "View all posts in ISE"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[ISE
editing](https://devblogs.microsoft.com/scripting/tag/ise-editing/ "View all posts in ISE editing"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jakob Gottlieb
Svendsen](https://devblogs.microsoft.com/scripting/tag/jakob-gottlieb-svendsen/ "View all posts in Jakob Gottlieb Svendsen"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[James
Brundage](https://devblogs.microsoft.com/scripting/tag/james-brundage/ "View all posts in James Brundage"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[James
Kehr](https://devblogs.microsoft.com/scripting/tag/james-kehr/ "View all posts in James Kehr"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[James
O'Neill](https://devblogs.microsoft.com/scripting/tag/james-oneill/ "View all posts in James O’Neill"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jan Egil
Ring](https://devblogs.microsoft.com/scripting/tag/jan-egil-ring/ "View all posts in Jan Egil Ring"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jason
Helmick](https://devblogs.microsoft.com/scripting/tag/jason-helmick/ "View all posts in Jason Helmick"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jason
Hofferle](https://devblogs.microsoft.com/scripting/tag/jason-hofferle/ "View all posts in Jason Hofferle"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jason
Morgan](https://devblogs.microsoft.com/scripting/tag/jason-morgan/ "View all posts in Jason Morgan"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jason
Ryberg](https://devblogs.microsoft.com/scripting/tag/jason-ryberg/ "View all posts in Jason Ryberg"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jason
Walker](https://devblogs.microsoft.com/scripting/tag/jason-walker/ "View all posts in Jason Walker"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Java](https://devblogs.microsoft.com/scripting/tag/java/ "View all posts in Java"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[JD
Platek](https://devblogs.microsoft.com/scripting/tag/jd-platek/ "View all posts in JD Platek"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jeff
Wouters](https://devblogs.microsoft.com/scripting/tag/jeff-wouters/ "View all posts in Jeff Wouters"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jeffery
Hicks](https://devblogs.microsoft.com/scripting/tag/jeffery-hicks/ "View all posts in Jeffery Hicks"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jeremy
Engel](https://devblogs.microsoft.com/scripting/tag/jeremy-engel/ "View all posts in Jeremy Engel"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jim
Christopher](https://devblogs.microsoft.com/scripting/tag/jim-christopher/ "View all posts in Jim Christopher"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[jobs](https://devblogs.microsoft.com/scripting/tag/jobs/ "View all posts in jobs"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Joel
Bennett](https://devblogs.microsoft.com/scripting/tag/joel-bennett/ "View all posts in Joel Bennett"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Joel
Stidley](https://devblogs.microsoft.com/scripting/tag/joel-stidley/ "View all posts in Joel Stidley"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Joel
Vickery](https://devblogs.microsoft.com/scripting/tag/joel-vickery/ "View all posts in Joel Vickery"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[John
Ferringer](https://devblogs.microsoft.com/scripting/tag/john-ferringer/ "View all posts in John Ferringer"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[John
Slack](https://devblogs.microsoft.com/scripting/tag/john-slack/ "View all posts in John Slack"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jon
Newman](https://devblogs.microsoft.com/scripting/tag/jon-newman/ "View all posts in Jon Newman"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jonathan
Allen](https://devblogs.microsoft.com/scripting/tag/jonathan-allen/ "View all posts in Jonathan Allen"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jonathan
Medd](https://devblogs.microsoft.com/scripting/tag/jonathan-medd/ "View all posts in Jonathan Medd"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jonathan
Tyler](https://devblogs.microsoft.com/scripting/tag/jonathan-tyler/ "View all posts in Jonathan Tyler"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Jonathan
Yong](https://devblogs.microsoft.com/scripting/tag/jonathan-yong/ "View all posts in Jonathan Yong"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Josh
Atwell](https://devblogs.microsoft.com/scripting/tag/josh-atwell/ "View all posts in Josh Atwell"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Josh
Gavant](https://devblogs.microsoft.com/scripting/tag/josh-gavant/ "View all posts in Josh Gavant"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Json](https://devblogs.microsoft.com/scripting/tag/json/ "View all posts in Json"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[judges](https://devblogs.microsoft.com/scripting/tag/judges/ "View all posts in judges"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[judging
criteria](https://devblogs.microsoft.com/scripting/tag/judging-criteria/ "View all posts in judging criteria"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Judith
Herman](https://devblogs.microsoft.com/scripting/tag/judith-herman/ "View all posts in Judith Herman"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[June
Blender](https://devblogs.microsoft.com/scripting/tag/june-blender/ "View all posts in June Blender"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Justin
Hall](https://devblogs.microsoft.com/scripting/tag/justin-hall/ "View all posts in Justin Hall"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[k Scripting
Techniques](https://devblogs.microsoft.com/scripting/tag/k-scripting-techniques/ "View all posts in k Scripting Techniques"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Karl
Mitschke](https://devblogs.microsoft.com/scripting/tag/karl-mitschke/ "View all posts in Karl Mitschke"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Keith
HIll](https://devblogs.microsoft.com/scripting/tag/keith-hill/ "View all posts in Keith HIll"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Keith
Mayer](https://devblogs.microsoft.com/scripting/tag/keith-mayer/ "View all posts in Keith Mayer"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Ken
McFerron](https://devblogs.microsoft.com/scripting/tag/ken-mcferron/ "View all posts in Ken McFerron"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Kendal
VanDyke](https://devblogs.microsoft.com/scripting/tag/kendal-vandyke/ "View all posts in Kendal VanDyke"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Kevin
Kline](https://devblogs.microsoft.com/scripting/tag/kevin-kline/ "View all posts in Kevin Kline"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Kirk
Munro](https://devblogs.microsoft.com/scripting/tag/kirk-munro/ "View all posts in Kirk Munro"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Klaus
Schulte](https://devblogs.microsoft.com/scripting/tag/klaus-schulte/ "View all posts in Klaus Schulte"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Kory
Thacher](https://devblogs.microsoft.com/scripting/tag/kory-thacher/ "View all posts in Kory Thacher"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[koryt](https://devblogs.microsoft.com/scripting/tag/koryt/ "View all posts in koryt"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Laerte
Junior](https://devblogs.microsoft.com/scripting/tag/laerte-junior/ "View all posts in Laerte Junior"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[leaderboard](https://devblogs.microsoft.com/scripting/tag/leaderboard/ "View all posts in leaderboard"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Lee
Holmes](https://devblogs.microsoft.com/scripting/tag/lee-holmes/ "View all posts in Lee Holmes"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Lido
Paglia](https://devblogs.microsoft.com/scripting/tag/lido-paglia/ "View all posts in Lido Paglia"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[LINUX](https://devblogs.microsoft.com/scripting/tag/linux/ "View all posts in LINUX"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[local account
management](https://devblogs.microsoft.com/scripting/tag/local-account-management/ "View all posts in local account management"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[local
accounts](https://devblogs.microsoft.com/scripting/tag/local-accounts/ "View all posts in local accounts"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[local accounts and Windows NT
4.0
accounts](https://devblogs.microsoft.com/scripting/tag/local-accounts-and-windows-nt-4-0-accounts/ "View all posts in local accounts and Windows NT 4.0 accounts"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[local user account
management](https://devblogs.microsoft.com/scripting/tag/local-user-account-management/ "View all posts in local user account management"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Log
Analytics](https://devblogs.microsoft.com/scripting/tag/log-analytics/ "View all posts in Log Analytics"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[log
parser](https://devblogs.microsoft.com/scripting/tag/log-parser/ "View all posts in log parser"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Logging and
events](https://devblogs.microsoft.com/scripting/tag/logging-and-events/ "View all posts in Logging and events"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[logon
sessions](https://devblogs.microsoft.com/scripting/tag/logon-sessions/ "View all posts in logon sessions"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[logs](https://devblogs.microsoft.com/scripting/tag/logs/ "View all posts in logs"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Logs and
logging](https://devblogs.microsoft.com/scripting/tag/logs-and-logging/ "View all posts in Logs and logging"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Logs and
monitoring](https://devblogs.microsoft.com/scripting/tag/logs-and-monitoring/ "View all posts in Logs and monitoring"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[looping](https://devblogs.microsoft.com/scripting/tag/looping/ "View all posts in looping"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[LYNC](https://devblogs.microsoft.com/scripting/tag/lync/ "View all posts in LYNC"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Management](https://devblogs.microsoft.com/scripting/tag/management/ "View all posts in Management"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Marc
Carter](https://devblogs.microsoft.com/scripting/tag/marc-carter/ "View all posts in Marc Carter"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Marc van
Orsouw](https://devblogs.microsoft.com/scripting/tag/marc-van-orsouw/ "View all posts in Marc van Orsouw"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Marco
Shaw](https://devblogs.microsoft.com/scripting/tag/marco-shaw/ "View all posts in Marco Shaw"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Mark
Morowczynski](https://devblogs.microsoft.com/scripting/tag/mark-morowczynski/ "View all posts in Mark Morowczynski"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Mark
Schill](https://devblogs.microsoft.com/scripting/tag/mark-schill/ "View all posts in Mark Schill"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Mark
Tabladillo](https://devblogs.microsoft.com/scripting/tag/mark-tabladillo/ "View all posts in Mark Tabladillo"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[masking
passwords](https://devblogs.microsoft.com/scripting/tag/masking-passwords/ "View all posts in masking passwords"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[math](https://devblogs.microsoft.com/scripting/tag/math/ "View all posts in math"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Matt
Bongiovi](https://devblogs.microsoft.com/scripting/tag/matt-bongiovi/ "View all posts in Matt Bongiovi"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Matt
Graeber](https://devblogs.microsoft.com/scripting/tag/matt-graeber/ "View all posts in Matt Graeber"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Matt
Hester](https://devblogs.microsoft.com/scripting/tag/matt-hester/ "View all posts in Matt Hester"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Matt
Hitchcock](https://devblogs.microsoft.com/scripting/tag/matt-hitchcock/ "View all posts in Matt Hitchcock"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Matt
Tisdale](https://devblogs.microsoft.com/scripting/tag/matt-tisdale/ "View all posts in Matt Tisdale"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Matthew
Hitchcock](https://devblogs.microsoft.com/scripting/tag/matthew-hitchcock/ "View all posts in Matthew Hitchcock"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Matthew
Kerfoot](https://devblogs.microsoft.com/scripting/tag/matthew-kerfoot/ "View all posts in Matthew Kerfoot"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[MCSE](https://devblogs.microsoft.com/scripting/tag/mcse/ "View all posts in MCSE"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[MDT](https://devblogs.microsoft.com/scripting/tag/mdt/ "View all posts in MDT"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Media](https://devblogs.microsoft.com/scripting/tag/media/ "View all posts in Media"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Messaging &
Communication](https://devblogs.microsoft.com/scripting/tag/messaging-communication/ "View all posts in Messaging & Communication"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[messaging and
communication](https://devblogs.microsoft.com/scripting/tag/messaging-and-communication/ "View all posts in messaging and communication"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Metadata](https://devblogs.microsoft.com/scripting/tag/metadata/ "View all posts in Metadata"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Michael
Blumenthal](https://devblogs.microsoft.com/scripting/tag/michael-blumenthal/ "View all posts in Michael Blumenthal"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Michael
Frommhold](https://devblogs.microsoft.com/scripting/tag/michael-frommhold/ "View all posts in Michael Frommhold"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Michael
Wells](https://devblogs.microsoft.com/scripting/tag/michael-wells/ "View all posts in Michael Wells"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Microsoft
365](https://devblogs.microsoft.com/scripting/tag/microsoft-365/ "View all posts in Microsoft 365"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Microsoft
Access](https://devblogs.microsoft.com/scripting/tag/microsoft-access/ "View all posts in Microsoft Access"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Microsoft
Excel](https://devblogs.microsoft.com/scripting/tag/microsoft-excel/ "View all posts in Microsoft Excel"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Microsoft Exchange
2003](https://devblogs.microsoft.com/scripting/tag/microsoft-exchange-2003/ "View all posts in Microsoft Exchange 2003"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Microsoft Exchange
2007](https://devblogs.microsoft.com/scripting/tag/microsoft-exchange-2007/ "View all posts in Microsoft Exchange 2007"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Microsoft Exchange
2010](https://devblogs.microsoft.com/scripting/tag/microsoft-exchange-2010/ "View all posts in Microsoft Exchange 2010"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Microsoft
Office](https://devblogs.microsoft.com/scripting/tag/microsoft-office/ "View all posts in Microsoft Office"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Microsoft
Outlook](https://devblogs.microsoft.com/scripting/tag/microsoft-outlook/ "View all posts in Microsoft Outlook"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Microsoft
PowerPoint](https://devblogs.microsoft.com/scripting/tag/microsoft-powerpoint/ "View all posts in Microsoft PowerPoint"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Microsoft
Visio](https://devblogs.microsoft.com/scripting/tag/microsoft-visio/ "View all posts in Microsoft Visio"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Microsoft
Word](https://devblogs.microsoft.com/scripting/tag/microsoft-word/ "View all posts in Microsoft Word"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[migration](https://devblogs.microsoft.com/scripting/tag/migration/ "View all posts in migration"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Mike F
Robbins](https://devblogs.microsoft.com/scripting/tag/mike-f-robbins/ "View all posts in Mike F Robbins"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Mike
Fal](https://devblogs.microsoft.com/scripting/tag/mike-fal/ "View all posts in Mike Fal"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Mike
O\'Neill](https://devblogs.microsoft.com/scripting/tag/mike-oneill/ "View all posts in Mike O'Neill"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Mike
Pfeiffer](https://devblogs.microsoft.com/scripting/tag/mike-pfeiffer/ "View all posts in Mike Pfeiffer"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Mike
Stiers](https://devblogs.microsoft.com/scripting/tag/mike-stiers/ "View all posts in Mike Stiers"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Mini Scripting
Games](https://devblogs.microsoft.com/scripting/tag/mini-scripting-games/ "View all posts in Mini Scripting Games"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Mobile](https://devblogs.microsoft.com/scripting/tag/mobile/ "View all posts in Mobile"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[module](https://devblogs.microsoft.com/scripting/tag/module/ "View all posts in module"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Module
Browser](https://devblogs.microsoft.com/scripting/tag/module-browser/ "View all posts in Module Browser"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[modules](https://devblogs.microsoft.com/scripting/tag/modules/ "View all posts in modules"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[monitoring](https://devblogs.microsoft.com/scripting/tag/monitoring/ "View all posts in monitoring"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Monitoring and
logs](https://devblogs.microsoft.com/scripting/tag/monitoring-and-logs/ "View all posts in Monitoring and logs"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[MSOMS](https://devblogs.microsoft.com/scripting/tag/msoms/ "View all posts in MSOMS"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[multimedia](https://devblogs.microsoft.com/scripting/tag/multimedia/ "View all posts in multimedia"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Nano
Server](https://devblogs.microsoft.com/scripting/tag/nano-server/ "View all posts in Nano Server"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Network
Adapter](https://devblogs.microsoft.com/scripting/tag/network-adapter/ "View all posts in Network Adapter"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[network
adapters](https://devblogs.microsoft.com/scripting/tag/network-adapters/ "View all posts in network adapters"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[networking](https://devblogs.microsoft.com/scripting/tag/networking/ "View all posts in networking"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Nicholas
Cain](https://devblogs.microsoft.com/scripting/tag/nicholas-cain/ "View all posts in Nicholas Cain"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Nicolas
Blank](https://devblogs.microsoft.com/scripting/tag/nicolas-blank/ "View all posts in Nicolas Blank"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Niklas
Goude](https://devblogs.microsoft.com/scripting/tag/niklas-goude/ "View all posts in Niklas Goude"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Norman
Drews](https://devblogs.microsoft.com/scripting/tag/norman-drews/ "View all posts in Norman Drews"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Numbers](https://devblogs.microsoft.com/scripting/tag/numbers/ "View all posts in Numbers"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Objects](https://devblogs.microsoft.com/scripting/tag/objects/ "View all posts in Objects"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[ODBC](https://devblogs.microsoft.com/scripting/tag/odbc/ "View all posts in ODBC"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Office](https://devblogs.microsoft.com/scripting/tag/office/ "View all posts in Office"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Office
365](https://devblogs.microsoft.com/scripting/tag/office-365/ "View all posts in Office 365"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Office 365
API](https://devblogs.microsoft.com/scripting/tag/office-365-api/ "View all posts in Office 365 API"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Office 365
Sites](https://devblogs.microsoft.com/scripting/tag/office-365-sites/ "View all posts in Office 365 Sites"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[official
rules](https://devblogs.microsoft.com/scripting/tag/official-rules/ "View all posts in official rules"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Oliver
Lipkau](https://devblogs.microsoft.com/scripting/tag/oliver-lipkau/ "View all posts in Oliver Lipkau"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[operating
system](https://devblogs.microsoft.com/scripting/tag/operating-system/ "View all posts in operating system"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Oracle](https://devblogs.microsoft.com/scripting/tag/oracle/ "View all posts in Oracle"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[other Directory
Services](https://devblogs.microsoft.com/scripting/tag/other-directory-services/ "View all posts in other Directory Services"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[OUs](https://devblogs.microsoft.com/scripting/tag/ous/ "View all posts in OUs"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Out-GridView](https://devblogs.microsoft.com/scripting/tag/out-gridview/ "View all posts in Out-GridView"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Output](https://devblogs.microsoft.com/scripting/tag/output/ "View all posts in Output"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[packet
traces](https://devblogs.microsoft.com/scripting/tag/packet-traces/ "View all posts in packet traces"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[page
files](https://devblogs.microsoft.com/scripting/tag/page-files/ "View all posts in page files"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[parameter](https://devblogs.microsoft.com/scripting/tag/parameter/ "View all posts in parameter"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Partners](https://devblogs.microsoft.com/scripting/tag/partners/ "View all posts in Partners"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[passwords](https://devblogs.microsoft.com/scripting/tag/passwords/ "View all posts in passwords"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Patrick
Mercier](https://devblogs.microsoft.com/scripting/tag/patrick-mercier/ "View all posts in Patrick Mercier"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Paul
Greeley](https://devblogs.microsoft.com/scripting/tag/paul-greeley/ "View all posts in Paul Greeley"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Paul
Higinbotham](https://devblogs.microsoft.com/scripting/tag/paul-higinbotham/ "View all posts in Paul Higinbotham"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Paulo
Morgado](https://devblogs.microsoft.com/scripting/tag/paulo-morgado/ "View all posts in Paulo Morgado"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Per
Pedersen](https://devblogs.microsoft.com/scripting/tag/per-pedersen/ "View all posts in Per Pedersen"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[performance](https://devblogs.microsoft.com/scripting/tag/performance/ "View all posts in performance"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[peripherals and
devices](https://devblogs.microsoft.com/scripting/tag/peripherals-and-devices/ "View all posts in peripherals and devices"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[permission and
security](https://devblogs.microsoft.com/scripting/tag/permission-and-security/ "View all posts in permission and security"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[permissions](https://devblogs.microsoft.com/scripting/tag/permissions/ "View all posts in permissions"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Pester](https://devblogs.microsoft.com/scripting/tag/pester/ "View all posts in Pester"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Phil
Braniff](https://devblogs.microsoft.com/scripting/tag/phil-braniff/ "View all posts in Phil Braniff"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[pinvoke](https://devblogs.microsoft.com/scripting/tag/pinvoke/ "View all posts in pinvoke"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[pipeline](https://devblogs.microsoft.com/scripting/tag/pipeline/ "View all posts in pipeline"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[plain-text
logs](https://devblogs.microsoft.com/scripting/tag/plain-text-logs/ "View all posts in plain-text logs"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Podcast](https://devblogs.microsoft.com/scripting/tag/podcast/ "View all posts in Podcast"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[ports](https://devblogs.microsoft.com/scripting/tag/ports/ "View all posts in ports"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[ports and
slots](https://devblogs.microsoft.com/scripting/tag/ports-and-slots/ "View all posts in ports and slots"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[power
management](https://devblogs.microsoft.com/scripting/tag/power-management/ "View all posts in power management"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[PowerCLI](https://devblogs.microsoft.com/scripting/tag/powercli/ "View all posts in PowerCLI"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[PowerShell](https://devblogs.microsoft.com/scripting/tag/powershell/ "View all posts in PowerShell"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[PowerShell
3](https://devblogs.microsoft.com/scripting/tag/powershell-3/ "View all posts in PowerShell 3"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[powershell
3.0](https://devblogs.microsoft.com/scripting/tag/powershell-3-0/ "View all posts in powershell 3.0"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[PowerShell
4](https://devblogs.microsoft.com/scripting/tag/powershell-4/ "View all posts in PowerShell 4"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[PowerShell
4.0](https://devblogs.microsoft.com/scripting/tag/powershell-4-0/ "View all posts in PowerShell 4.0"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Powershell
5](https://devblogs.microsoft.com/scripting/tag/powershell-5/ "View all posts in Powershell 5"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[PowerShell
5.0](https://devblogs.microsoft.com/scripting/tag/powershell-5-0/ "View all posts in PowerShell 5.0"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[PowerShell best
practices](https://devblogs.microsoft.com/scripting/tag/powershell-best-practices/ "View all posts in PowerShell best practices"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[PowerShell
Gallery](https://devblogs.microsoft.com/scripting/tag/powershell-gallery/ "View all posts in PowerShell Gallery"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[PowerShell
Get](https://devblogs.microsoft.com/scripting/tag/powershell-get/ "View all posts in PowerShell Get"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[PowerTip](https://devblogs.microsoft.com/scripting/tag/powertip/ "View all posts in PowerTip"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[PowerTip: Find Default Session
Config Connection in PowerShell Summary: Find the default session
configuration connection in Windows PowerShell. How can I determine what
default session
configuration](https://devblogs.microsoft.com/scripting/tag/powertip-find-default-session-config-connection-in-powershell-summary-find-the-default-session-configuration-connection-in-windows-powershell-how-can-i-determine-what-default-session-configuration-2/ "View all posts in PowerTip: Find Default Session Config Connection in PowerShell Summary: Find the default session configuration connection in Windows PowerShell. How can I determine what default session configuration"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Print](https://devblogs.microsoft.com/scripting/tag/print/ "View all posts in Print"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[print
servers](https://devblogs.microsoft.com/scripting/tag/print-servers/ "View all posts in print servers"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Print Servers Print Queues and
print
jobs](https://devblogs.microsoft.com/scripting/tag/print-servers-print-queues-and-print-jobs/ "View all posts in Print Servers Print Queues and print jobs"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[printer ports drivers and
devices](https://devblogs.microsoft.com/scripting/tag/printer-ports-drivers-and-devices/ "View all posts in printer ports drivers and devices"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Printers](https://devblogs.microsoft.com/scripting/tag/printers/ "View all posts in Printers"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[printing](https://devblogs.microsoft.com/scripting/tag/printing/ "View all posts in printing"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[prize
winners](https://devblogs.microsoft.com/scripting/tag/prize-winners/ "View all posts in prize winners"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Process](https://devblogs.microsoft.com/scripting/tag/process/ "View all posts in Process"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[processes](https://devblogs.microsoft.com/scripting/tag/processes/ "View all posts in processes"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Procmon](https://devblogs.microsoft.com/scripting/tag/procmon/ "View all posts in Procmon"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[profile](https://devblogs.microsoft.com/scripting/tag/profile/ "View all posts in profile"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[profiles](https://devblogs.microsoft.com/scripting/tag/profiles/ "View all posts in profiles"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[prompt](https://devblogs.microsoft.com/scripting/tag/prompt/ "View all posts in prompt"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Providers](https://devblogs.microsoft.com/scripting/tag/providers/ "View all posts in Providers"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[PSDrives](https://devblogs.microsoft.com/scripting/tag/psdrives/ "View all posts in PSDrives"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[PSGallery](https://devblogs.microsoft.com/scripting/tag/psgallery/ "View all posts in PSGallery"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[PSGet](https://devblogs.microsoft.com/scripting/tag/psget/ "View all posts in PSGet"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[PSProviders](https://devblogs.microsoft.com/scripting/tag/psproviders/ "View all posts in PSProviders"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[PSReadLine](https://devblogs.microsoft.com/scripting/tag/psreadline/ "View all posts in PSReadLine"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[query completion
server](https://devblogs.microsoft.com/scripting/tag/query-completion-server/ "View all posts in query completion server"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[queues](https://devblogs.microsoft.com/scripting/tag/queues/ "View all posts in queues"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Quick-Hits
Friday](https://devblogs.microsoft.com/scripting/tag/quick-hits-friday/ "View all posts in Quick-Hits Friday"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Ragnar
Harper](https://devblogs.microsoft.com/scripting/tag/ragnar-harper/ "View all posts in Ragnar Harper"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Raimund
Andree](https://devblogs.microsoft.com/scripting/tag/raimund-andree/ "View all posts in Raimund Andree"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Rajesh B.
Ravindranath](https://devblogs.microsoft.com/scripting/tag/rajesh-b-ravindranath/ "View all posts in Rajesh B. Ravindranath"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Ravikanth](https://devblogs.microsoft.com/scripting/tag/ravikanth/ "View all posts in Ravikanth"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Raymond
Mitchell](https://devblogs.microsoft.com/scripting/tag/raymond-mitchell/ "View all posts in Raymond Mitchell"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[receiving
input](https://devblogs.microsoft.com/scripting/tag/receiving-input/ "View all posts in receiving input"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Recycle
Bin](https://devblogs.microsoft.com/scripting/tag/recycle-bin/ "View all posts in Recycle Bin"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Reference](https://devblogs.microsoft.com/scripting/tag/reference/ "View all posts in Reference"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[RegEx](https://devblogs.microsoft.com/scripting/tag/regex/ "View all posts in RegEx"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[registry](https://devblogs.microsoft.com/scripting/tag/registry/ "View all posts in registry"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[regular
expressions](https://devblogs.microsoft.com/scripting/tag/regular-expressions/ "View all posts in regular expressions"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[reliability](https://devblogs.microsoft.com/scripting/tag/reliability/ "View all posts in reliability"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[remote](https://devblogs.microsoft.com/scripting/tag/remote/ "View all posts in remote"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Remote
Endpoint](https://devblogs.microsoft.com/scripting/tag/remote-endpoint/ "View all posts in Remote Endpoint"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[remoting](https://devblogs.microsoft.com/scripting/tag/remoting/ "View all posts in remoting"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Reporting](https://devblogs.microsoft.com/scripting/tag/reporting/ "View all posts in Reporting"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Reports](https://devblogs.microsoft.com/scripting/tag/reports/ "View all posts in Reports"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Resource
Guide](https://devblogs.microsoft.com/scripting/tag/resource-guide/ "View all posts in Resource Guide"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[resource
ownership](https://devblogs.microsoft.com/scripting/tag/resource-ownership/ "View all posts in resource ownership"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[retrieving
input](https://devblogs.microsoft.com/scripting/tag/retrieving-input/ "View all posts in retrieving input"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Rhys
Campbell](https://devblogs.microsoft.com/scripting/tag/rhys-campbell/ "View all posts in Rhys Campbell"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Rich
Prescott](https://devblogs.microsoft.com/scripting/tag/rich-prescott/ "View all posts in Rich Prescott"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Richard
Diphoorn](https://devblogs.microsoft.com/scripting/tag/richard-diphoorn/ "View all posts in Richard Diphoorn"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Richard
Siddaway](https://devblogs.microsoft.com/scripting/tag/richard-siddaway/ "View all posts in Richard Siddaway"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Rob
Campbell](https://devblogs.microsoft.com/scripting/tag/rob-campbell/ "View all posts in Rob Campbell"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Robert
Robelo](https://devblogs.microsoft.com/scripting/tag/robert-robelo/ "View all posts in Robert Robelo"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Rod
Colledge](https://devblogs.microsoft.com/scripting/tag/rod-colledge/ "View all posts in Rod Colledge"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[RODC](https://devblogs.microsoft.com/scripting/tag/rodc/ "View all posts in RODC"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Rohn
Edwards](https://devblogs.microsoft.com/scripting/tag/rohn-edwards/ "View all posts in Rohn Edwards"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Rolf
Masuch](https://devblogs.microsoft.com/scripting/tag/rolf-masuch/ "View all posts in Rolf Masuch"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[RPC](https://devblogs.microsoft.com/scripting/tag/rpc/ "View all posts in RPC"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[RSAT](https://devblogs.microsoft.com/scripting/tag/rsat/ "View all posts in RSAT"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[RSS](https://devblogs.microsoft.com/scripting/tag/rss/ "View all posts in RSS"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[RSS
feeds](https://devblogs.microsoft.com/scripting/tag/rss-feeds/ "View all posts in RSS feeds"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Rudolf
Vesely](https://devblogs.microsoft.com/scripting/tag/rudolf-vesely/ "View all posts in Rudolf Vesely"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[running](https://devblogs.microsoft.com/scripting/tag/running/ "View all posts in running"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[running
scripts](https://devblogs.microsoft.com/scripting/tag/running-scripts/ "View all posts in running scripts"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Runspace](https://devblogs.microsoft.com/scripting/tag/runspace/ "View all posts in Runspace"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[SAN](https://devblogs.microsoft.com/scripting/tag/san/ "View all posts in SAN"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Schedule
Tasks](https://devblogs.microsoft.com/scripting/tag/schedule-tasks/ "View all posts in Schedule Tasks"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[scheduled
task](https://devblogs.microsoft.com/scripting/tag/scheduled-task/ "View all posts in scheduled task"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[scheduled
tasks](https://devblogs.microsoft.com/scripting/tag/scheduled-tasks/ "View all posts in scheduled tasks"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Schema](https://devblogs.microsoft.com/scripting/tag/schema/ "View all posts in Schema"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[SCOM 2007
R2](https://devblogs.microsoft.com/scripting/tag/scom-2007-r2/ "View all posts in SCOM 2007 R2"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Scope](https://devblogs.microsoft.com/scripting/tag/scope/ "View all posts in Scope"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Scott
Ge](https://devblogs.microsoft.com/scripting/tag/scott-ge/ "View all posts in Scott Ge"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Script
Analyzer](https://devblogs.microsoft.com/scripting/tag/script-analyzer/ "View all posts in Script Analyzer"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Script
Browser](https://devblogs.microsoft.com/scripting/tag/script-browser/ "View all posts in Script Browser"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Script
Center](https://devblogs.microsoft.com/scripting/tag/script-center/ "View all posts in Script Center"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Script
Repository](https://devblogs.microsoft.com/scripting/tag/script-repository/ "View all posts in Script Repository"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[script
signing](https://devblogs.microsoft.com/scripting/tag/script-signing/ "View all posts in script signing"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Scripter](https://devblogs.microsoft.com/scripting/tag/scripter/ "View all posts in Scripter"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Scripti9ng
Techniques](https://devblogs.microsoft.com/scripting/tag/scripti9ng-techniques/ "View all posts in Scripti9ng Techniques"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Scripting](https://devblogs.microsoft.com/scripting/tag/scripting/ "View all posts in Scripting"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Scripting
Games](https://devblogs.microsoft.com/scripting/tag/scripting-games/ "View all posts in Scripting Games"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Scripting Games
2014](https://devblogs.microsoft.com/scripting/tag/scripting-games-2014/ "View all posts in Scripting Games 2014"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Scripting
Guy!](https://devblogs.microsoft.com/scripting/tag/scripting-guy/ "View all posts in Scripting Guy!"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Scripting
Technique](https://devblogs.microsoft.com/scripting/tag/scripting-technique/ "View all posts in Scripting Technique"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[scripting
techniques](https://devblogs.microsoft.com/scripting/tag/scripting-techniques/ "View all posts in scripting techniques"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[scripting
templates](https://devblogs.microsoft.com/scripting/tag/scripting-templates/ "View all posts in scripting templates"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Scripting
Wife](https://devblogs.microsoft.com/scripting/tag/scripting-wife/ "View all posts in Scripting Wife"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Sean
Kearney](https://devblogs.microsoft.com/scripting/tag/sean-kearney/ "View all posts in Sean Kearney"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Sean
McCown](https://devblogs.microsoft.com/scripting/tag/sean-mccown/ "View all posts in Sean McCown"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[search](https://devblogs.microsoft.com/scripting/tag/search/ "View all posts in search"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Searching](https://devblogs.microsoft.com/scripting/tag/searching/ "View all posts in Searching"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[searching Active
Directory](https://devblogs.microsoft.com/scripting/tag/searching-active-directory/ "View all posts in searching Active Directory"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[security](https://devblogs.microsoft.com/scripting/tag/security/ "View all posts in security"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Select-String](https://devblogs.microsoft.com/scripting/tag/select-string/ "View all posts in Select-String"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[sending
email](https://devblogs.microsoft.com/scripting/tag/sending-email/ "View all posts in sending email"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[sending
mail](https://devblogs.microsoft.com/scripting/tag/sending-mail/ "View all posts in sending mail"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Series](https://devblogs.microsoft.com/scripting/tag/series/ "View all posts in Series"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Serkan
Varoglu](https://devblogs.microsoft.com/scripting/tag/serkan-varoglu/ "View all posts in Serkan Varoglu"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Server
Applications](https://devblogs.microsoft.com/scripting/tag/server-applications/ "View all posts in Server Applications"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Server-Side
Management](https://devblogs.microsoft.com/scripting/tag/server-side-management/ "View all posts in Server-Side Management"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Server-Side
update](https://devblogs.microsoft.com/scripting/tag/server-side-update/ "View all posts in Server-Side update"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[servers](https://devblogs.microsoft.com/scripting/tag/servers/ "View all posts in servers"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[servers
WSUS](https://devblogs.microsoft.com/scripting/tag/servers-wsus/ "View all posts in servers WSUS"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Service Packs and Hot
Fixes](https://devblogs.microsoft.com/scripting/tag/service-packs-and-hot-fixes/ "View all posts in Service Packs and Hot Fixes"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[service packs and
hotfixes](https://devblogs.microsoft.com/scripting/tag/service-packs-and-hotfixes/ "View all posts in service packs and hotfixes"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[services](https://devblogs.microsoft.com/scripting/tag/services/ "View all posts in services"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[sessions](https://devblogs.microsoft.com/scripting/tag/sessions/ "View all posts in sessions"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Seth
Brandes](https://devblogs.microsoft.com/scripting/tag/seth-brandes/ "View all posts in Seth Brandes"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Shadow
Copy](https://devblogs.microsoft.com/scripting/tag/shadow-copy/ "View all posts in Shadow Copy"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Shane
Hoey](https://devblogs.microsoft.com/scripting/tag/shane-hoey/ "View all posts in Shane Hoey"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Shane
Nelson](https://devblogs.microsoft.com/scripting/tag/shane-nelson/ "View all posts in Shane Nelson"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Shannon
Ma](https://devblogs.microsoft.com/scripting/tag/shannon-ma/ "View all posts in Shannon Ma"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[shared folders and mapped
drives](https://devblogs.microsoft.com/scripting/tag/shared-folders-and-mapped-drives/ "View all posts in shared folders and mapped drives"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[SharePoint](https://devblogs.microsoft.com/scripting/tag/sharepoint/ "View all posts in SharePoint"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[SharePoint
2010](https://devblogs.microsoft.com/scripting/tag/sharepoint-2010/ "View all posts in SharePoint 2010"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[SharePoint
Online](https://devblogs.microsoft.com/scripting/tag/sharepoint-online/ "View all posts in SharePoint Online"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Shay
Levy](https://devblogs.microsoft.com/scripting/tag/shay-levy/ "View all posts in Shay Levy"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[shell.application](https://devblogs.microsoft.com/scripting/tag/shell-application/ "View all posts in shell.application"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Sherif
Talaat](https://devblogs.microsoft.com/scripting/tag/sherif-talaat/ "View all posts in Sherif Talaat"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Shubert
Somer](https://devblogs.microsoft.com/scripting/tag/shubert-somer/ "View all posts in Shubert Somer"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Siegfried
Jagott](https://devblogs.microsoft.com/scripting/tag/siegfried-jagott/ "View all posts in Siegfried Jagott"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[sites and
subnets](https://devblogs.microsoft.com/scripting/tag/sites-and-subnets/ "View all posts in sites and subnets"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[SkyDrive](https://devblogs.microsoft.com/scripting/tag/skydrive/ "View all posts in SkyDrive"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[SMTP
Mail](https://devblogs.microsoft.com/scripting/tag/smtp-mail/ "View all posts in SMTP Mail"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Snapshot
Debugger](https://devblogs.microsoft.com/scripting/tag/snapshot-debugger/ "View all posts in Snapshot Debugger"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Snippets](https://devblogs.microsoft.com/scripting/tag/snippets/ "View all posts in Snippets"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Software](https://devblogs.microsoft.com/scripting/tag/software/ "View all posts in Software"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Solutions](https://devblogs.microsoft.com/scripting/tag/solutions/ "View all posts in Solutions"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[sorting](https://devblogs.microsoft.com/scripting/tag/sorting/ "View all posts in sorting"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[special
folders](https://devblogs.microsoft.com/scripting/tag/special-folders/ "View all posts in special folders"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[splatting](https://devblogs.microsoft.com/scripting/tag/splatting/ "View all posts in splatting"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[sponsor](https://devblogs.microsoft.com/scripting/tag/sponsor/ "View all posts in sponsor"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[sponsors](https://devblogs.microsoft.com/scripting/tag/sponsors/ "View all posts in sponsors"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[SQL](https://devblogs.microsoft.com/scripting/tag/sql/ "View all posts in SQL"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[SQL
2012](https://devblogs.microsoft.com/scripting/tag/sql-2012/ "View all posts in SQL 2012"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[SQL
Server](https://devblogs.microsoft.com/scripting/tag/sql-server/ "View all posts in SQL Server"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[SQL Server
2008](https://devblogs.microsoft.com/scripting/tag/sql-server-2008/ "View all posts in SQL Server 2008"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[SQL Server
2012](https://devblogs.microsoft.com/scripting/tag/sql-server-2012/ "View all posts in SQL Server 2012"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[startup and
shutdown](https://devblogs.microsoft.com/scripting/tag/startup-and-shutdown/ "View all posts in startup and shutdown"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Stefan
Roth](https://devblogs.microsoft.com/scripting/tag/stefan-roth/ "View all posts in Stefan Roth"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Stefan
Stranger](https://devblogs.microsoft.com/scripting/tag/stefan-stranger/ "View all posts in Stefan Stranger"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Stephane van
Gulick](https://devblogs.microsoft.com/scripting/tag/stephane-van-gulick/ "View all posts in Stephane van Gulick"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Steve
Jeffery](https://devblogs.microsoft.com/scripting/tag/steve-jeffery/ "View all posts in Steve Jeffery"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Steve
Murawski](https://devblogs.microsoft.com/scripting/tag/steve-murawski/ "View all posts in Steve Murawski"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Steven
Murawski](https://devblogs.microsoft.com/scripting/tag/steven-murawski/ "View all posts in Steven Murawski"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[storage](https://devblogs.microsoft.com/scripting/tag/storage/ "View all posts in storage"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Streams](https://devblogs.microsoft.com/scripting/tag/streams/ "View all posts in Streams"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[string](https://devblogs.microsoft.com/scripting/tag/string/ "View all posts in string"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[string
manipulation](https://devblogs.microsoft.com/scripting/tag/string-manipulation/ "View all posts in string manipulation"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Strings](https://devblogs.microsoft.com/scripting/tag/strings/ "View all posts in Strings"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[study
guide](https://devblogs.microsoft.com/scripting/tag/study-guide/ "View all posts in study guide"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Susan
Ferrell](https://devblogs.microsoft.com/scripting/tag/susan-ferrell/ "View all posts in Susan Ferrell"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Susan
Hill](https://devblogs.microsoft.com/scripting/tag/susan-hill/ "View all posts in Susan Hill"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Sysinternals](https://devblogs.microsoft.com/scripting/tag/sysinternals/ "View all posts in Sysinternals"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[System
Center](https://devblogs.microsoft.com/scripting/tag/system-center/ "View all posts in System Center"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[System
Restore](https://devblogs.microsoft.com/scripting/tag/system-restore/ "View all posts in System Restore"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Taylor
Gibb](https://devblogs.microsoft.com/scripting/tag/taylor-gibb/ "View all posts in Taylor Gibb"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[TCP/IP](https://devblogs.microsoft.com/scripting/tag/tcpip/ "View all posts in TCP/IP"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Teams](https://devblogs.microsoft.com/scripting/tag/teams/ "View all posts in Teams"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[TechEd](https://devblogs.microsoft.com/scripting/tag/teched/ "View all posts in TechEd"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[TechEd
2014](https://devblogs.microsoft.com/scripting/tag/teched-2014/ "View all posts in TechEd 2014"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[TechEd\_2010](https://devblogs.microsoft.com/scripting/tag/teched_2010/ "View all posts in TechEd_2010"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[TechEd2012](https://devblogs.microsoft.com/scripting/tag/teched2012/ "View all posts in TechEd2012"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Teresa
Wilson](https://devblogs.microsoft.com/scripting/tag/teresa-wilson/ "View all posts in Teresa Wilson"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Terminal
Server](https://devblogs.microsoft.com/scripting/tag/terminal-server/ "View all posts in Terminal Server"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Terri
Donahue](https://devblogs.microsoft.com/scripting/tag/terri-donahue/ "View all posts in Terri Donahue"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Test
Experience](https://devblogs.microsoft.com/scripting/tag/test-experience/ "View all posts in Test Experience"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Testing](https://devblogs.microsoft.com/scripting/tag/testing/ "View all posts in Testing"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Text](https://devblogs.microsoft.com/scripting/tag/text/ "View all posts in Text"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[text
files](https://devblogs.microsoft.com/scripting/tag/text-files/ "View all posts in text files"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Text
manipulation](https://devblogs.microsoft.com/scripting/tag/text-manipulation/ "View all posts in Text manipulation"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[TFS](https://devblogs.microsoft.com/scripting/tag/tfs/ "View all posts in TFS"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[The
MAK](https://devblogs.microsoft.com/scripting/tag/the-mak/ "View all posts in The MAK"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Thiyagu](https://devblogs.microsoft.com/scripting/tag/thiyagu/ "View all posts in Thiyagu"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Thomas
Lee](https://devblogs.microsoft.com/scripting/tag/thomas-lee/ "View all posts in Thomas Lee"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Thomas
Rayner](https://devblogs.microsoft.com/scripting/tag/thomas-rayner/ "View all posts in Thomas Rayner"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Thomas
Stringer](https://devblogs.microsoft.com/scripting/tag/thomas-stringer/ "View all posts in Thomas Stringer"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Tibor
Soos](https://devblogs.microsoft.com/scripting/tag/tibor-soos/ "View all posts in Tibor Soos"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Tim
Bolton](https://devblogs.microsoft.com/scripting/tag/tim-bolton/ "View all posts in Tim Bolton"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[time
sync](https://devblogs.microsoft.com/scripting/tag/time-sync/ "View all posts in time sync"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Time
Synchronization](https://devblogs.microsoft.com/scripting/tag/time-synchronization/ "View all posts in Time Synchronization"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[TimeSpan](https://devblogs.microsoft.com/scripting/tag/timespan/ "View all posts in TimeSpan"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Timothy
Warner](https://devblogs.microsoft.com/scripting/tag/timothy-warner/ "View all posts in Timothy Warner"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Tips and
Tricks](https://devblogs.microsoft.com/scripting/tag/tips-and-tricks/ "View all posts in Tips and Tricks"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Tobias
Weltner](https://devblogs.microsoft.com/scripting/tag/tobias-weltner/ "View all posts in Tobias Weltner"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Todd
Klindt](https://devblogs.microsoft.com/scripting/tag/todd-klindt/ "View all posts in Todd Klindt"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Tom
Moser](https://devblogs.microsoft.com/scripting/tag/tom-moser/ "View all posts in Tom Moser"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Tom
Shinder](https://devblogs.microsoft.com/scripting/tag/tom-shinder/ "View all posts in Tom Shinder"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Tome
Tanasovski](https://devblogs.microsoft.com/scripting/tag/tome-tanasovski/ "View all posts in Tome Tanasovski"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[top
20](https://devblogs.microsoft.com/scripting/tag/top-20/ "View all posts in top 20"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[trace](https://devblogs.microsoft.com/scripting/tag/trace/ "View all posts in trace"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[traces](https://devblogs.microsoft.com/scripting/tag/traces/ "View all posts in traces"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[translation](https://devblogs.microsoft.com/scripting/tag/translation/ "View all posts in translation"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Trevor
Sullivan](https://devblogs.microsoft.com/scripting/tag/trevor-sullivan/ "View all posts in Trevor Sullivan"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[troubleshooting](https://devblogs.microsoft.com/scripting/tag/troubleshooting/ "View all posts in troubleshooting"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Types](https://devblogs.microsoft.com/scripting/tag/types/ "View all posts in Types"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[updates](https://devblogs.microsoft.com/scripting/tag/updates/ "View all posts in updates"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Upgrade](https://devblogs.microsoft.com/scripting/tag/upgrade/ "View all posts in Upgrade"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[USB](https://devblogs.microsoft.com/scripting/tag/usb/ "View all posts in USB"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[user
accounts](https://devblogs.microsoft.com/scripting/tag/user-accounts/ "View all posts in user accounts"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[user
groups](https://devblogs.microsoft.com/scripting/tag/user-groups/ "View all posts in user groups"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[users](https://devblogs.microsoft.com/scripting/tag/users/ "View all posts in users"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[using the
Internet](https://devblogs.microsoft.com/scripting/tag/using-the-internet/ "View all posts in using the Internet"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[using the
web](https://devblogs.microsoft.com/scripting/tag/using-the-web/ "View all posts in using the web"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Variable](https://devblogs.microsoft.com/scripting/tag/variable/ "View all posts in Variable"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Variables](https://devblogs.microsoft.com/scripting/tag/variables/ "View all posts in Variables"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[VB](https://devblogs.microsoft.com/scripting/tag/vb/ "View all posts in VB"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[VBScript](https://devblogs.microsoft.com/scripting/tag/vbscript/ "View all posts in VBScript"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[VBScript
migration](https://devblogs.microsoft.com/scripting/tag/vbscript-migration/ "View all posts in VBScript migration"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Version](https://devblogs.microsoft.com/scripting/tag/version/ "View all posts in Version"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[version
information](https://devblogs.microsoft.com/scripting/tag/version-information/ "View all posts in version information"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[video](https://devblogs.microsoft.com/scripting/tag/video/ "View all posts in video"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[video and
display](https://devblogs.microsoft.com/scripting/tag/video-and-display/ "View all posts in video and display"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[video
RAM](https://devblogs.microsoft.com/scripting/tag/video-ram/ "View all posts in video RAM"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Videos](https://devblogs.microsoft.com/scripting/tag/videos/ "View all posts in Videos"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Vinay
Pamnani](https://devblogs.microsoft.com/scripting/tag/vinay-pamnani/ "View all posts in Vinay Pamnani"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Virtual
Machines](https://devblogs.microsoft.com/scripting/tag/virtual-machines/ "View all posts in Virtual Machines"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[virtual
server](https://devblogs.microsoft.com/scripting/tag/virtual-server/ "View all posts in virtual server"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual
Studio](https://devblogs.microsoft.com/scripting/tag/visual-studio/ "View all posts in Visual Studio"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual Studio
2017](https://devblogs.microsoft.com/scripting/tag/visual-studio-2017/ "View all posts in Visual Studio 2017"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual Studio App
Center](https://devblogs.microsoft.com/scripting/tag/visual-studio-app-center/ "View all posts in Visual Studio App Center"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual Studio
Code](https://devblogs.microsoft.com/scripting/tag/visual-studio-code/ "View all posts in Visual Studio Code"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual Studio for
Mac](https://devblogs.microsoft.com/scripting/tag/visual-studio-for-mac/ "View all posts in Visual Studio for Mac"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual Studio
IDE](https://devblogs.microsoft.com/scripting/tag/visual-studio-ide/ "View all posts in Visual Studio IDE"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual Studio Live
Share](https://devblogs.microsoft.com/scripting/tag/visual-studio-live-share/ "View all posts in Visual Studio Live Share"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual Studio
Marketplace](https://devblogs.microsoft.com/scripting/tag/visual-studio-marketplace/ "View all posts in Visual Studio Marketplace"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual Studio
Previews](https://devblogs.microsoft.com/scripting/tag/visual-studio-previews/ "View all posts in Visual Studio Previews"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual Studio
Subscriptions](https://devblogs.microsoft.com/scripting/tag/visual-studio-subscriptions/ "View all posts in Visual Studio Subscriptions"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual Studio Tools for
AI](https://devblogs.microsoft.com/scripting/tag/visual-studio-tools-for-ai/ "View all posts in Visual Studio Tools for AI"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Visual Studio Tools for
Xamarin](https://devblogs.microsoft.com/scripting/tag/visual-studio-tools-for-xamarin/ "View all posts in Visual Studio Tools for Xamarin"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[VMM](https://devblogs.microsoft.com/scripting/tag/vmm/ "View all posts in VMM"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Walid
Moselhy](https://devblogs.microsoft.com/scripting/tag/walid-moselhy/ "View all posts in Walid Moselhy"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Web pages and
HTAs](https://devblogs.microsoft.com/scripting/tag/web-pages-and-htas/ "View all posts in Web pages and HTAs"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Web
Service](https://devblogs.microsoft.com/scripting/tag/web-service/ "View all posts in Web Service"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[web
services](https://devblogs.microsoft.com/scripting/tag/web-services/ "View all posts in web services"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Webinar](https://devblogs.microsoft.com/scripting/tag/webinar/ "View all posts in Webinar"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Websites](https://devblogs.microsoft.com/scripting/tag/websites/ "View all posts in Websites"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Weekend
Scripter](https://devblogs.microsoft.com/scripting/tag/weekend-scripter/ "View all posts in Weekend Scripter"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Wei Hao
Lim](https://devblogs.microsoft.com/scripting/tag/wei-hao-lim/ "View all posts in Wei Hao Lim"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Will
Anderson](https://devblogs.microsoft.com/scripting/tag/will-anderson/ "View all posts in Will Anderson"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Will
Martin](https://devblogs.microsoft.com/scripting/tag/will-martin/ "View all posts in Will Martin"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Will
Steele](https://devblogs.microsoft.com/scripting/tag/will-steele/ "View all posts in Will Steele"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[William
Stanek](https://devblogs.microsoft.com/scripting/tag/william-stanek/ "View all posts in William Stanek"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Win32](https://devblogs.microsoft.com/scripting/tag/win32/ "View all posts in Win32"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
10](https://devblogs.microsoft.com/scripting/tag/windows-10/ "View all posts in Windows 10"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
7](https://devblogs.microsoft.com/scripting/tag/windows-7/ "View all posts in Windows 7"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
8](https://devblogs.microsoft.com/scripting/tag/windows-8/ "View all posts in Windows 8"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
8.1](https://devblogs.microsoft.com/scripting/tag/windows-8-1/ "View all posts in Windows 8.1"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
Azure](https://devblogs.microsoft.com/scripting/tag/windows-azure/ "View all posts in Windows Azure"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
Explorer](https://devblogs.microsoft.com/scripting/tag/windows-explorer/ "View all posts in Windows Explorer"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows Management
Framework](https://devblogs.microsoft.com/scripting/tag/windows-management-framework/ "View all posts in Windows Management Framework"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows Media Player and
audio](https://devblogs.microsoft.com/scripting/tag/windows-media-player-and-audio/ "View all posts in Windows Media Player and audio"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
NT](https://devblogs.microsoft.com/scripting/tag/windows-nt/ "View all posts in Windows NT"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
PE](https://devblogs.microsoft.com/scripting/tag/windows-pe/ "View all posts in Windows PE"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
PowerShell](https://devblogs.microsoft.com/scripting/tag/windows-powershell/ "View all posts in Windows PowerShell"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows PowerShell
3.0](https://devblogs.microsoft.com/scripting/tag/windows-powershell-3-0/ "View all posts in Windows PowerShell 3.0"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows PowerShell
4.0](https://devblogs.microsoft.com/scripting/tag/windows-powershell-4-0/ "View all posts in Windows PowerShell 4.0"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows PowerShell
5](https://devblogs.microsoft.com/scripting/tag/windows-powershell-5/ "View all posts in Windows PowerShell 5"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows PowerShell
5.0](https://devblogs.microsoft.com/scripting/tag/windows-powershell-5-0/ "View all posts in Windows PowerShell 5.0"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows PowerShell
ISE](https://devblogs.microsoft.com/scripting/tag/windows-powershell-ise/ "View all posts in Windows PowerShell ISE"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
PowerShll](https://devblogs.microsoft.com/scripting/tag/windows-powershll/ "View all posts in Windows PowerShll"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
Server](https://devblogs.microsoft.com/scripting/tag/windows-server/ "View all posts in Windows Server"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows Server
2003](https://devblogs.microsoft.com/scripting/tag/windows-server-2003/ "View all posts in Windows Server 2003"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows Server 2008
R2](https://devblogs.microsoft.com/scripting/tag/windows-server-2008-r2/ "View all posts in Windows Server 2008 R2"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows Server
2012](https://devblogs.microsoft.com/scripting/tag/windows-server-2012/ "View all posts in Windows Server 2012"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows Server 2012
R2](https://devblogs.microsoft.com/scripting/tag/windows-server-2012-r2/ "View all posts in Windows Server 2012 R2"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows Server
2016](https://devblogs.microsoft.com/scripting/tag/windows-server-2016/ "View all posts in Windows Server 2016"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows To
Go](https://devblogs.microsoft.com/scripting/tag/windows-to-go/ "View all posts in Windows To Go"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
Update](https://devblogs.microsoft.com/scripting/tag/windows-update/ "View all posts in Windows Update"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows
Vista](https://devblogs.microsoft.com/scripting/tag/windows-vista/ "View all posts in Windows Vista"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Windows Windows
PowerShell](https://devblogs.microsoft.com/scripting/tag/windows-windows-powershell/ "View all posts in Windows Windows PowerShell"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[WinNT](https://devblogs.microsoft.com/scripting/tag/winnt/ "View all posts in WinNT"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[WinRM](https://devblogs.microsoft.com/scripting/tag/winrm/ "View all posts in WinRM"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[WMI](https://devblogs.microsoft.com/scripting/tag/wmi/ "View all posts in WMI"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Word](https://devblogs.microsoft.com/scripting/tag/word/ "View all posts in Word"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Word.Application](https://devblogs.microsoft.com/scripting/tag/word-application/ "View all posts in Word.Application"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Workflow](https://devblogs.microsoft.com/scripting/tag/workflow/ "View all posts in Workflow"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Workflows](https://devblogs.microsoft.com/scripting/tag/workflows/ "View all posts in Workflows"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[WPF](https://devblogs.microsoft.com/scripting/tag/wpf/ "View all posts in WPF"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[WPK](https://devblogs.microsoft.com/scripting/tag/wpk/ "View all posts in WPK"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[wrap
up](https://devblogs.microsoft.com/scripting/tag/wrap-up/ "View all posts in wrap up"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[writing](https://devblogs.microsoft.com/scripting/tag/writing/ "View all posts in writing"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[writing
scripts](https://devblogs.microsoft.com/scripting/tag/writing-scripts/ "View all posts in writing scripts"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[WshShell](https://devblogs.microsoft.com/scripting/tag/wshshell/ "View all posts in WshShell"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[WSUS](https://devblogs.microsoft.com/scripting/tag/wsus/ "View all posts in WSUS"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[Xamarin](https://devblogs.microsoft.com/scripting/tag/xamarin/ "View all posts in Xamarin"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[XML](https://devblogs.microsoft.com/scripting/tag/xml/ "View all posts in XML"){.btn
.btn-outline-secondary .btn-sm
.ftr-tags}[xpath](https://devblogs.microsoft.com/scripting/tag/xpath/ "View all posts in xpath"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Yan
Pan](https://devblogs.microsoft.com/scripting/tag/yan-pan/ "View all posts in Yan Pan"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Yuri
Diogenes](https://devblogs.microsoft.com/scripting/tag/yuri-diogenes/ "View all posts in Yuri Diogenes"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Zachary
Loeber](https://devblogs.microsoft.com/scripting/tag/zachary-loeber/ "View all posts in Zachary Loeber"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}[Zune and other media
devices](https://devblogs.microsoft.com/scripting/tag/zune-and-other-media-devices/ "View all posts in Zune and other media devices"){.btn
.btn-outline-secondary .btn-sm .ftr-tags}
:::
:::
:::
:::

::: {.col-lg-4 style="padding-bottom:10px"}
::: {.card .bottomright aria-label="Archive"}
::: {.card-body style="height:393px;padding-left:26px;padding-top:24px;padding-right:17px;margin-bottom:24px"}
##### Archive {#archive .card-title}

::: {.card-text .listdisplay style="height:100%;width:100%;overflow-y:auto;overflow-x:hidden"}
::: {.ftr-archives role="list"}
[February 2021](https://devblogs.microsoft.com/scripting/2021/02/)

[September 2020](https://devblogs.microsoft.com/scripting/2020/09/)

[December 2019](https://devblogs.microsoft.com/scripting/2019/12/)

[November 2019](https://devblogs.microsoft.com/scripting/2019/11/)

[October 2019](https://devblogs.microsoft.com/scripting/2019/10/)

[September 2019](https://devblogs.microsoft.com/scripting/2019/09/)

[August 2019](https://devblogs.microsoft.com/scripting/2019/08/)

[July 2019](https://devblogs.microsoft.com/scripting/2019/07/)

[November 2018](https://devblogs.microsoft.com/scripting/2018/11/)

[September 2018](https://devblogs.microsoft.com/scripting/2018/09/)

[August 2018](https://devblogs.microsoft.com/scripting/2018/08/)

[July 2018](https://devblogs.microsoft.com/scripting/2018/07/)

[June 2018](https://devblogs.microsoft.com/scripting/2018/06/)

[May 2018](https://devblogs.microsoft.com/scripting/2018/05/)

[April 2018](https://devblogs.microsoft.com/scripting/2018/04/)

[March 2018](https://devblogs.microsoft.com/scripting/2018/03/)

[February 2018](https://devblogs.microsoft.com/scripting/2018/02/)

[January 2018](https://devblogs.microsoft.com/scripting/2018/01/)

[December 2017](https://devblogs.microsoft.com/scripting/2017/12/)

[November 2017](https://devblogs.microsoft.com/scripting/2017/11/)

[October 2017](https://devblogs.microsoft.com/scripting/2017/10/)

[August 2017](https://devblogs.microsoft.com/scripting/2017/08/)

[July 2017](https://devblogs.microsoft.com/scripting/2017/07/)

[February 2017](https://devblogs.microsoft.com/scripting/2017/02/)

[January 2017](https://devblogs.microsoft.com/scripting/2017/01/)

[December 2016](https://devblogs.microsoft.com/scripting/2016/12/)

[November 2016](https://devblogs.microsoft.com/scripting/2016/11/)

[October 2016](https://devblogs.microsoft.com/scripting/2016/10/)

[September 2016](https://devblogs.microsoft.com/scripting/2016/09/)

[August 2016](https://devblogs.microsoft.com/scripting/2016/08/)

[July 2016](https://devblogs.microsoft.com/scripting/2016/07/)

[June 2016](https://devblogs.microsoft.com/scripting/2016/06/)

[May 2016](https://devblogs.microsoft.com/scripting/2016/05/)

[April 2016](https://devblogs.microsoft.com/scripting/2016/04/)

[March 2016](https://devblogs.microsoft.com/scripting/2016/03/)

[February 2016](https://devblogs.microsoft.com/scripting/2016/02/)

[January 2016](https://devblogs.microsoft.com/scripting/2016/01/)

[December 2015](https://devblogs.microsoft.com/scripting/2015/12/)

[November 2015](https://devblogs.microsoft.com/scripting/2015/11/)

[October 2015](https://devblogs.microsoft.com/scripting/2015/10/)

[September 2015](https://devblogs.microsoft.com/scripting/2015/09/)

[August 2015](https://devblogs.microsoft.com/scripting/2015/08/)

[July 2015](https://devblogs.microsoft.com/scripting/2015/07/)

[June 2015](https://devblogs.microsoft.com/scripting/2015/06/)

[May 2015](https://devblogs.microsoft.com/scripting/2015/05/)

[April 2015](https://devblogs.microsoft.com/scripting/2015/04/)

[March 2015](https://devblogs.microsoft.com/scripting/2015/03/)

[February 2015](https://devblogs.microsoft.com/scripting/2015/02/)

[January 2015](https://devblogs.microsoft.com/scripting/2015/01/)

[December 2014](https://devblogs.microsoft.com/scripting/2014/12/)

[November 2014](https://devblogs.microsoft.com/scripting/2014/11/)

[October 2014](https://devblogs.microsoft.com/scripting/2014/10/)

[September 2014](https://devblogs.microsoft.com/scripting/2014/09/)

[August 2014](https://devblogs.microsoft.com/scripting/2014/08/)

[July 2014](https://devblogs.microsoft.com/scripting/2014/07/)

[June 2014](https://devblogs.microsoft.com/scripting/2014/06/)

[May 2014](https://devblogs.microsoft.com/scripting/2014/05/)

[April 2014](https://devblogs.microsoft.com/scripting/2014/04/)

[March 2014](https://devblogs.microsoft.com/scripting/2014/03/)

[February 2014](https://devblogs.microsoft.com/scripting/2014/02/)

[January 2014](https://devblogs.microsoft.com/scripting/2014/01/)

[December 2013](https://devblogs.microsoft.com/scripting/2013/12/)

[November 2013](https://devblogs.microsoft.com/scripting/2013/11/)

[October 2013](https://devblogs.microsoft.com/scripting/2013/10/)

[September 2013](https://devblogs.microsoft.com/scripting/2013/09/)

[August 2013](https://devblogs.microsoft.com/scripting/2013/08/)

[July 2013](https://devblogs.microsoft.com/scripting/2013/07/)

[June 2013](https://devblogs.microsoft.com/scripting/2013/06/)

[May 2013](https://devblogs.microsoft.com/scripting/2013/05/)

[April 2013](https://devblogs.microsoft.com/scripting/2013/04/)

[March 2013](https://devblogs.microsoft.com/scripting/2013/03/)

[February 2013](https://devblogs.microsoft.com/scripting/2013/02/)

[January 2013](https://devblogs.microsoft.com/scripting/2013/01/)

[December 2012](https://devblogs.microsoft.com/scripting/2012/12/)

[November 2012](https://devblogs.microsoft.com/scripting/2012/11/)

[October 2012](https://devblogs.microsoft.com/scripting/2012/10/)

[September 2012](https://devblogs.microsoft.com/scripting/2012/09/)

[August 2012](https://devblogs.microsoft.com/scripting/2012/08/)

[July 2012](https://devblogs.microsoft.com/scripting/2012/07/)

[June 2012](https://devblogs.microsoft.com/scripting/2012/06/)

[May 2012](https://devblogs.microsoft.com/scripting/2012/05/)

[April 2012](https://devblogs.microsoft.com/scripting/2012/04/)

[March 2012](https://devblogs.microsoft.com/scripting/2012/03/)

[February 2012](https://devblogs.microsoft.com/scripting/2012/02/)

[January 2012](https://devblogs.microsoft.com/scripting/2012/01/)

[December 2011](https://devblogs.microsoft.com/scripting/2011/12/)

[November 2011](https://devblogs.microsoft.com/scripting/2011/11/)

[October 2011](https://devblogs.microsoft.com/scripting/2011/10/)

[September 2011](https://devblogs.microsoft.com/scripting/2011/09/)

[August 2011](https://devblogs.microsoft.com/scripting/2011/08/)

[July 2011](https://devblogs.microsoft.com/scripting/2011/07/)

[June 2011](https://devblogs.microsoft.com/scripting/2011/06/)

[May 2011](https://devblogs.microsoft.com/scripting/2011/05/)

[April 2011](https://devblogs.microsoft.com/scripting/2011/04/)

[March 2011](https://devblogs.microsoft.com/scripting/2011/03/)

[February 2011](https://devblogs.microsoft.com/scripting/2011/02/)

[January 2011](https://devblogs.microsoft.com/scripting/2011/01/)

[December 2010](https://devblogs.microsoft.com/scripting/2010/12/)

[November 2010](https://devblogs.microsoft.com/scripting/2010/11/)

[October 2010](https://devblogs.microsoft.com/scripting/2010/10/)

[September 2010](https://devblogs.microsoft.com/scripting/2010/09/)

[August 2010](https://devblogs.microsoft.com/scripting/2010/08/)

[July 2010](https://devblogs.microsoft.com/scripting/2010/07/)

[June 2010](https://devblogs.microsoft.com/scripting/2010/06/)

[May 2010](https://devblogs.microsoft.com/scripting/2010/05/)

[April 2010](https://devblogs.microsoft.com/scripting/2010/04/)

[March 2010](https://devblogs.microsoft.com/scripting/2010/03/)

[February 2010](https://devblogs.microsoft.com/scripting/2010/02/)

[January 2010](https://devblogs.microsoft.com/scripting/2010/01/)

[December 2009](https://devblogs.microsoft.com/scripting/2009/12/)

[November 2009](https://devblogs.microsoft.com/scripting/2009/11/)

[October 2009](https://devblogs.microsoft.com/scripting/2009/10/)

[September 2009](https://devblogs.microsoft.com/scripting/2009/09/)

[August 2009](https://devblogs.microsoft.com/scripting/2009/08/)

[July 2009](https://devblogs.microsoft.com/scripting/2009/07/)

[June 2009](https://devblogs.microsoft.com/scripting/2009/06/)

[May 2009](https://devblogs.microsoft.com/scripting/2009/05/)

[April 2009](https://devblogs.microsoft.com/scripting/2009/04/)

[March 2009](https://devblogs.microsoft.com/scripting/2009/03/)

[February 2009](https://devblogs.microsoft.com/scripting/2009/02/)

[January 2009](https://devblogs.microsoft.com/scripting/2009/01/)

[December 2008](https://devblogs.microsoft.com/scripting/2008/12/)

[November 2008](https://devblogs.microsoft.com/scripting/2008/11/)

[October 2008](https://devblogs.microsoft.com/scripting/2008/10/)

[September 2008](https://devblogs.microsoft.com/scripting/2008/09/)

[August 2008](https://devblogs.microsoft.com/scripting/2008/08/)

[July 2008](https://devblogs.microsoft.com/scripting/2008/07/)

[June 2008](https://devblogs.microsoft.com/scripting/2008/06/)

[May 2008](https://devblogs.microsoft.com/scripting/2008/05/)

[April 2008](https://devblogs.microsoft.com/scripting/2008/04/)

[March 2008](https://devblogs.microsoft.com/scripting/2008/03/)

[February 2008](https://devblogs.microsoft.com/scripting/2008/02/)

[January 2008](https://devblogs.microsoft.com/scripting/2008/01/)

[December 2007](https://devblogs.microsoft.com/scripting/2007/12/)

[November 2007](https://devblogs.microsoft.com/scripting/2007/11/)

[October 2007](https://devblogs.microsoft.com/scripting/2007/10/)

[September 2007](https://devblogs.microsoft.com/scripting/2007/09/)

[August 2007](https://devblogs.microsoft.com/scripting/2007/08/)

[July 2007](https://devblogs.microsoft.com/scripting/2007/07/)

[June 2007](https://devblogs.microsoft.com/scripting/2007/06/)

[May 2007](https://devblogs.microsoft.com/scripting/2007/05/)

[April 2007](https://devblogs.microsoft.com/scripting/2007/04/)

[March 2007](https://devblogs.microsoft.com/scripting/2007/03/)

[February 2007](https://devblogs.microsoft.com/scripting/2007/02/)

[January 2007](https://devblogs.microsoft.com/scripting/2007/01/)

[December 2006](https://devblogs.microsoft.com/scripting/2006/12/)

[November 2006](https://devblogs.microsoft.com/scripting/2006/11/)

[October 2006](https://devblogs.microsoft.com/scripting/2006/10/)

[September 2006](https://devblogs.microsoft.com/scripting/2006/09/)

[August 2006](https://devblogs.microsoft.com/scripting/2006/08/)

[July 2006](https://devblogs.microsoft.com/scripting/2006/07/)

[June 2006](https://devblogs.microsoft.com/scripting/2006/06/)

[May 2006](https://devblogs.microsoft.com/scripting/2006/05/)

[April 2006](https://devblogs.microsoft.com/scripting/2006/04/)

[March 2006](https://devblogs.microsoft.com/scripting/2006/03/)

[February 2006](https://devblogs.microsoft.com/scripting/2006/02/)

[January 2006](https://devblogs.microsoft.com/scripting/2006/01/)

[December 2005](https://devblogs.microsoft.com/scripting/2005/12/)

[November 2005](https://devblogs.microsoft.com/scripting/2005/11/)

[October 2005](https://devblogs.microsoft.com/scripting/2005/10/)

[September 2005](https://devblogs.microsoft.com/scripting/2005/09/)

[August 2005](https://devblogs.microsoft.com/scripting/2005/08/)

[July 2005](https://devblogs.microsoft.com/scripting/2005/07/)

[June 2005](https://devblogs.microsoft.com/scripting/2005/06/)

[May 2005](https://devblogs.microsoft.com/scripting/2005/05/)

[April 2005](https://devblogs.microsoft.com/scripting/2005/04/)

[March 2005](https://devblogs.microsoft.com/scripting/2005/03/)

[February 2005](https://devblogs.microsoft.com/scripting/2005/02/)

[January 2005](https://devblogs.microsoft.com/scripting/2005/01/)

[December 2004](https://devblogs.microsoft.com/scripting/2004/12/)

[November 2004](https://devblogs.microsoft.com/scripting/2004/11/)

[October 2004](https://devblogs.microsoft.com/scripting/2004/10/)

[September 2004](https://devblogs.microsoft.com/scripting/2004/09/)

[August 2004](https://devblogs.microsoft.com/scripting/2004/08/)
:::
:::
:::
:::
:::
:::
:::

::: {.container}
::: {.row}
::: {.col-12}
::: {.row .justify-content-center .featuresectiontwo}
::: {.col-4}
:::

::: {.col-4}
:::
:::

::: {.row .justify-content-center .featuresectiontwo}
::: {.col-10}
Stay informed {#stay-informed .stayinformedtitle}
-------------

::: {.col-12}
[](https://www.facebook.com/groups/5901799452/){.no-underline
.stayinformedsite}[](https://twitter.com/scriptingguys){.no-underline
.stayinformedsite}[](https://devblogs.microsoft.com/scripting/feed/){.no-underline
.stayinformedsite}
:::
:::
:::
:::
:::
:::
:::
:::

::: {style="display:none"}
:::

::: {#codeModal .modal .fade .sf-hidden tabindex="-1" role="dialog" aria-labelledby="codeModalLabel" aria-hidden="true"}
:::

::: {#footerArea .uhf data-m="{"cN":"footerArea","cT":"Area_coreuiArea","id":"a2Body","sN":2,"aN":"Body"}"}
::: {#footerRegion data-region-key="footerregion" data-m="{"cN":"footerRegion","cT":"Region_coreui-region","id":"r1a2","sN":1,"aN":"a2"}"}
::: {#footerUniversalFooter data-m="{"cN":"footerUniversalFooter","cT":"Module_coreui-universalfooter","id":"m1r1a2","sN":1,"aN":"r1a2"}" data-module-id="Category|footerRegion|coreui-region|footerUniversalFooter|coreui-universalfooter"}
::: {.c-uhff-nav-row}
::: {.c-uhff-nav-group data-m="{"cN":"footerNavColumn1_cont","cT":"Container","id":"c1c1c1m1r1a2","sN":1,"aN":"c1c1m1r1a2"}"}
::: {.c-heading-4 role="heading" aria-level="4"}
What\'s new
:::

-   [Surface Pro
    8](https://www.microsoft.com/en-us/d/surface-pro-8/8QWCRTQ8V8XG){.c-uhff-link}
-   [Surface Laptop
    Studio](https://www.microsoft.com/en-us/d/surface-laptop-studio/8SRDF62SWKPF){.c-uhff-link}
-   [Surface Pro
    X](https://www.microsoft.com/en-us/d/surface-pro-x/8XTMB6C575MD){.c-uhff-link}
-   [Surface Go
    3](https://www.microsoft.com/en-us/d/surface-go-3/904H27D0CBWN){.c-uhff-link}
-   [Surface Duo
    2](https://www.microsoft.com/en-us/d/surface-duo-2/9408KGXP4XJL){.c-uhff-link}
-   [Surface Pro
    7+](https://www.microsoft.com/es-us/d/surface-pro-7-plus/92WRLRCVZ4PR){.c-uhff-link}
-   [Windows 11
    apps](https://www.microsoft.com/windows/windows-11-apps){.c-uhff-link}
-   [HoloLens 2](https://www.microsoft.com/en-us/hololens){.c-uhff-link}
:::

::: {.c-uhff-nav-group data-m="{"cN":"footerNavColumn2_cont","cT":"Container","id":"c2c1c1m1r1a2","sN":2,"aN":"c1c1m1r1a2"}"}
::: {.c-heading-4 role="heading" aria-level="4"}
Microsoft Store
:::

-   [Account profile](https://account.microsoft.com/){.c-uhff-link}
-   [Download
    Center](https://www.microsoft.com/en-us/download){.c-uhff-link}
-   [Microsoft Store
    support](https://go.microsoft.com/fwlink/?linkid=2139749){.c-uhff-link}
-   [Returns](https://go.microsoft.com/fwlink/p/?LinkID=824764&clcid=0x409){.c-uhff-link}
-   [Order tracking](https://account.microsoft.com/orders){.c-uhff-link}
-   [Virtual workshops and
    training](https://www.microsoft.com/en-us/store/workshops-training-and-events?icid=vl_uf_932020){.c-uhff-link}
-   [Microsoft Store
    Promise](https://www.microsoft.com/en-us/store/b/why-microsoft-store?icid=footer_why-msft-store_7102020){.c-uhff-link}
-   [Flexible
    Payments](https://www.microsoft.com/en-us/store/b/payment-financing-options?icid=footer_financing_vcc){.c-uhff-link}
:::

::: {.c-uhff-nav-group data-m="{"cN":"footerNavColumn3_cont","cT":"Container","id":"c3c1c1m1r1a2","sN":3,"aN":"c1c1m1r1a2"}"}
::: {.c-heading-4 role="heading" aria-level="4"}
Education
:::

-   [Microsoft in
    education](https://www.microsoft.com/en-us/education){.c-uhff-link}
-   [Office for
    students](https://www.microsoft.com/en-us/education/products/office/default.aspx){.c-uhff-link}
-   [Office 365 for
    schools](https://products.office.com/en-us/academic/compare-office-365-education-plans){.c-uhff-link}
-   [Deals for students &
    parents](https://www.microsoft.com/en-us/store/b/education?icid=CNavfooter_Studentsandeducation){.c-uhff-link}
-   [Microsoft Azure in
    education](https://azure.microsoft.com/en-us/community/education/){.c-uhff-link}
:::
:::

::: {.c-uhff-nav-row}
::: {.c-uhff-nav-group data-m="{"cN":"footerNavColumn4_cont","cT":"Container","id":"c4c1c1m1r1a2","sN":4,"aN":"c1c1m1r1a2"}"}
::: {.c-heading-4 role="heading" aria-level="4"}
Enterprise
:::

-   [Azure](https://azure.microsoft.com/){.c-uhff-link}
-   [AppSource](https://go.microsoft.com/fwlink/?LinkID=808093){.c-uhff-link}
-   [Automotive](https://www.microsoft.com/en-us/industry/automotive){.c-uhff-link}
-   [Government](https://www.microsoft.com/en-us/industry/government){.c-uhff-link}
-   [Healthcare](https://www.microsoft.com/en-us/industry/health/microsoft-cloud-for-healthcare){.c-uhff-link}
-   [Manufacturing](https://www.microsoft.com/en-us/industry/manufacturing/microsoft-cloud-for-manufacturing){.c-uhff-link}
-   [Financial
    services](https://www.microsoft.com/en-us/industry/financial-services/microsoft-cloud-for-financial-services){.c-uhff-link}
-   [Retail](https://www.microsoft.com/en-us/industry/retail/microsoft-cloud-for-retail){.c-uhff-link}
:::

::: {.c-uhff-nav-group data-m="{"cN":"footerNavColumn5_cont","cT":"Container","id":"c5c1c1m1r1a2","sN":5,"aN":"c1c1m1r1a2"}"}
::: {.c-heading-4 role="heading" aria-level="4"}
Developer
:::

-   [Microsoft Visual
    Studio](https://visualstudio.microsoft.com/){.c-uhff-link}
-   [Windows Dev
    Center](https://developer.microsoft.com/en-us/windows){.c-uhff-link}
-   [Developer Center](https://developer.microsoft.com/){.c-uhff-link}
-   [Microsoft developer
    program](https://developer.microsoft.com/en-us/store/register){.c-uhff-link}
-   [Channel 9](https://channel9.msdn.com/){.c-uhff-link}
-   [Microsoft 365 Dev
    Center](https://developer.microsoft.com/microsoft-365){.c-uhff-link}
-   [Microsoft 365 Developer
    Program](https://developer.microsoft.com/microsoft-365/dev-program){.c-uhff-link}
-   [Microsoft
    Garage](https://www.microsoft.com/en-us/garage/){.c-uhff-link}
:::

::: {.c-uhff-nav-group data-m="{"cN":"footerNavColumn6_cont","cT":"Container","id":"c6c1c1m1r1a2","sN":6,"aN":"c1c1m1r1a2"}"}
::: {.c-heading-4 role="heading" aria-level="4"}
Company
:::

-   [Careers](https://careers.microsoft.com/){.c-uhff-link}
-   [About
    Microsoft](https://www.microsoft.com/en-us/about){.c-uhff-link}
-   [Company news](https://news.microsoft.com/){.c-uhff-link}
-   [Privacy at
    Microsoft](https://privacy.microsoft.com/en-us){.c-uhff-link}
-   [Investors](https://www.microsoft.com/investor/default.aspx){.c-uhff-link}
-   [Diversity and
    inclusion](https://www.microsoft.com/en-us/diversity/){.c-uhff-link}
-   [Accessibility](https://www.microsoft.com/en-us/accessibility){.c-uhff-link}
-   [Security](https://www.microsoft.com/en-us/security/default.aspx){.c-uhff-link}
:::
:::

::: {.c-uhff-base}
[English (United
States)](https://www.microsoft.com/en-us/locale.aspx){#locale-picker-link
.c-uhff-link .c-uhff-lang-selector .c-glyph .glyph-world}

-   [[Sitemap](https://www.microsoft.com/en-us/sitemap1.aspx){.c-uhff-link}]{#c-uhff-footer_sitemap}
-   [[Contact
    Microsoft](https://support.microsoft.com/contactus){.c-uhff-link}]{#c-uhff-footer_contactus}
-   [[Privacy](https://go.microsoft.com/fwlink/?LinkId=521839){.c-uhff-link}]{#c-uhff-footer_privacyandcookies}
-   [[Manage cookies](#){.c-uhff-link}]{#c-uhff-footer_managecookies}
-   [[Terms of
    use](https://go.microsoft.com/fwlink/?LinkID=206977){.c-uhff-link}]{#c-uhff-footer_termsofuse}
-   [[Trademarks](https://www.microsoft.com/trademarks){.c-uhff-link}]{#c-uhff-footer_trademarks}
-   [[Safety &
    eco](https://www.microsoft.com/en-us/devices/safety-and-eco){.c-uhff-link}]{#c-uhff-footer_safetyandeco}
-   [[About our
    ads](https://choice.microsoft.com/){.c-uhff-link}]{#c-uhff-footer_aboutourads}
-   © Microsoft 2021
:::
:::
:::
:::

::: {#usabilla_live_button_container_633201973 .usabilla_live_button_container role="button" tabindex="0" aria-label="Usabilla Feedback Button"}
:::
