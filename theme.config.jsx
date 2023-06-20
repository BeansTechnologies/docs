import {useRouter} from "next/router";
import {useConfig} from "nextra-theme-docs";

export default {
    logo: <span>Beans</span>,
    project: {
        link: "https://github.com/BeansTechnologies"
    },
    useNextSeoProps() {
        const { asPath } = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – Beans Technologies'
            }
        }
    },
    head: function useHead() {
        const { title } = useConfig()
        const { route } = useRouter()
        return (
            <>
                <meta name="msapplication-TileColor" content="#fff" />
                <meta name="theme-color" content="#fff" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Language" content="en" />
                <meta
                    name="description"
                    content="High-quality open-source software solution for web developers."
                />
                <meta
                    name="og:description"
                    content="High-quality open-source software solution for web developers."
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="og:title"
                    content={title ? title + ' – Beans' : 'Beans'}
                />
                <meta name="apple-mobile-web-app-title" content="Beans" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
            </>
        )
    },
    editLink: {
        text: 'Edit this page on GitHub →'
    },
    feedback: {
        content: 'Question? Give us feedback →',
        labels: 'feedback',
    },
    sidebar: {
        titleComponent({ title, type }) {
            if (type === 'separator') {
                return <span className="cursor-default">{title}</span>
            }
            return <>{title}</>
        },
        defaultMenuCollapseLevel: 1,
        toggleButton: true
    },
    footer: {
        text: (
            <div className="flex w-full flex-col items-center sm:items-start">
                <p className="mt-6 text-xs">
                    © {new Date().getFullYear()} The Beans Project.
                </p>
            </div>
        )
    }
}