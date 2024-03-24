
//Input fields for checkout modal (all have the same structure)

export default function Input({ label, id, ...props }){
    return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}