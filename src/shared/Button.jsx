import './Button.css'

function Button({ children, variant = 'primary', size = 'md', style = {}, onClick, href }) {
    const className = `btn btn-${variant} btn-${size}`

    if (href) {
        return (
            <a href={href} className={className} style={style}>
                {children}
            </a>
        )
    }

    return (
        <button className={className} style={style} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
