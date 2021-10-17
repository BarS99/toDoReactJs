export const printList = () => {
  window.print();
};

export const exportList = () => {
  const file = document.createElement("a");
  file.setAttribute("download", "todo.txt");
  file.href = window.URL.createObjectURL(
    new Blob([JSON.stringify(localStorage.getItem("toDoStorage"))], {
      type: "text/csv",
    })
  );

  const evt = new MouseEvent("click");

  file.dispatchEvent(evt);
};

export const importList = () => {
  return new Promise((resolve, reject) => {
    const inputFile = document.createElement("input");
    inputFile.setAttribute("type", "file");

    inputFile.addEventListener("change", () => {
      let files = inputFile.files;

      if (files.length === 0) return;

      const file = files[0];

      const reader = new FileReader();

      reader.onload = (e) => {
        const file = e.target.result;

        const todoLocalStorage = JSON.parse(file);
        localStorage.setItem("toDoStorage", todoLocalStorage);

        resolve();
      };

      reader.onerror = (e) => {
        alert("Your file could not be imported!");
        reject();
      };

      reader.readAsText(file);
    });

    const evt = new MouseEvent("click");

    inputFile.dispatchEvent(evt);
  });
};
