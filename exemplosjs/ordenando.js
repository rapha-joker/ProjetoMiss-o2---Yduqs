// Função para trocar os valores de duas posições de um vetor
const swap = (vetor, posicao1, posicao2) => {
    const temp = vetor[posicao1];
    vetor[posicao1] = vetor[posicao2];
    vetor[posicao2] = temp;
  };
  
  // Função para embaralhar os elementos de um vetor
  const shuffle = (vetor, quantidadeTrocas) => {
    for (let i = 0; i < quantidadeTrocas; i++) {
      const posicao1 = Math.floor(Math.random() * vetor.length);
      const posicao2 = Math.floor(Math.random() * vetor.length);
      swap(vetor, posicao1, posicao2);
    }
  };
  
  // Função para ordenar um vetor de inteiros com o algoritmo Bubble Sort
  const bubbleSort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (vetor[j] > vetor[j + 1]) {
          swap(vetor, j, j + 1);
        }
      }
    }
  };
  
  // Função para ordenar um vetor de inteiros utilizando o algoritmo Selection Sort
  const selectionSort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (vetor[j] < vetor[minIndex]) {
          minIndex = j;
        }
      }
      swap(vetor, i, minIndex);
    }
  };
  
  // Função recursiva para ordenar um vetor de inteiros com o algoritmo Quick Sort
  const quickSort = (vetor, inicio = 0, fim = vetor.length - 1) => {
    if (inicio < fim) {
      const indicePivot = particionamento(vetor, inicio, fim);
      quickSort(vetor, inicio, indicePivot - 1);
      quickSort(vetor, indicePivot + 1, fim);
    }
  };
  
  // Função de apoio ao Quick Sort para particionar o vetor
  const particionamento = (vetor, inicio, fim) => {
    const pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++) {
      if (vetor[j] < pivot) {
        i++;
        swap(vetor, i, j);
      }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
  };