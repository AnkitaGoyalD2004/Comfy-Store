// import { useNavigation } from "react-router-dom";

// const SubmitBtn = ({ text }) => {
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === "submitting";

//   return (
//     <button
//       type="submit"
//       className="btn btn-primary btn-block"
//       disabled={isSubmitting}
//     >
//       {isSubmitting ? (
//         <>
//           <span className="loading loading-spinner"></span>
//           sending...
//         </>
//       ) : (
//         text || "submit"
//       )}
//     </button>
//   );
// };
// export default SubmitBtn;
import { useNavigation } from "react-router-dom";
const SubmitBtn = ({ text }) => {
  const isLoading = useNavigation().state === "submitting";
  return (
    <button disabled={isLoading} className="btn btn-primary btn-block">
      {isLoading ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;