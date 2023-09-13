import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  currentPage,
  handlNextPage,
  handlPreviousPage,
  handlClickPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button className={styles.arrow} onClick={handlPreviousPage} disabled = {currentPage <=1}>
        {"<"}
      </button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              className={styles.pageNumber}
              key={index}
              onClick={() => handlClickPage(index + 1)}
              disabled = {index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button className={styles.arrow} onClick={handlNextPage} disabled = {currentPage >= totalPages}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
