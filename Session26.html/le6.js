function convertDates(dateArray) {
    if (!Array.isArray(dateArray)) {
      return "Dữ liệu không hợp lệ";
    }
  
    if (dateArray.length === 0) {
      return "Mảng không có phần tử nào";
    }
    return dateArray.map(date => {
      const parts = date.split("-");
      if (parts.length !== 3) {
        return "Dữ liệu không hợp lệ";
      }
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    });
  }
  console.log(convertDates(["2025-03-10", "2024-12-25", "2023-07-01"]));
  console.log(convertDates([])); 
  console.log(convertDates("abc")); 
