export default function InputBox({label,placeholder,onChange}){
    return(
        <>
        <div
        className="text-sm font-medium text-left py-2"
        >{label}
        </div>
        <input type="text" placeholder={placeholder} onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200"/>
        </>
    )
}