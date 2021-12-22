/* tracking-widest spaces out each letter
h-8 is just an expanded header size from HTML
mb is margin (space from image in this case) 
curly brackets turn function calls into a dictionary
like JSON "key: value:", ".sm" = if mobile */
function HeaderItem({ Icon, title }) {
    return (
        <div className="flex flex-col items-center cursor-pointer group 
        w-12 sm:w-20 hover:text-white">
           <Icon className="h-8 mb-1 group-hover:animate-bounce" />
           <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p> 
        </div>
    )
}

export default HeaderItem
