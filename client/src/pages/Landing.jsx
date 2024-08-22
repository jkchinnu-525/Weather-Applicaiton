export default function Landing() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold  mb-4 text-slate-800">
        Welcome to my website
      </h1>
      <p className="mb-4 text-slate-700">
        It is a fully functional website where i have used reactjs for my
        front-end and nodejs for my backend.I have used mongodb as my primary
        database for storage and Supabase for user authentication and made use of
        many different libraries such as bcrypt,jsonwebtoken and many more to
        secure the data.I have implemented the weather fetching functionality
        by making use of weather API.
      </p>
    </div>
  );
}
