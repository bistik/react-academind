export default function Input({ ref, textarea, label, ...props }) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm bg-stone-200 text-stone-800 focus:outline-none";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-300">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
}
