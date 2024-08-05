Variáveis de Entrada:
- $T(X_1)=\{PS,MS,GS\}$ (Grau de sujeira: Pouco, médio, muito)
- $T(X_2)=\{SM,MM,GM\}$ (Quantidade de mancha: Sem, médio, grande)
- $T(Y)=\{MC,C,M,L,ML\}$ (Tempo de lavagem: Muito curto, curto, médio, longo, muito longo)


$T(X_1)$:
- $X_1^{PS}(x_1) =$
    - $\frac{50-x_1}{50}$, se $0\leq x_1 \leq 50$
    - $0$, se $x_1> 50$

$T(X_1)$:
- $X_1^{MS}(x_1) =$
    - $\frac{x_1}{50}$, se $0 \leq x_1 \leq 50$
    - $\frac{100-x_1}{50}$, se $50< x_1 \leq 100$

$T(X_1)$:
- $X_1^{GS}(x_1) =$
    - $0$, se $x_1\leq50$
    - $\frac{x_1-50}{50}$, se $50< x_1 \leq 100$


<b>Mancha:</b>

$T(X_2)$:
- $X_2^{SM}(x_2) =$
    - $\frac{50-x_2}{50}$, se $0 \leq x_2 \leq 50$
    - $0$, se $x_2> 50$

$T(X_2)$:
- $X_2^{MM}(x_2) =$
    - $\frac{x_2}{50}$, se $0 \leq x_2 \leq 50$
    - $\frac{100-x_2}{50}$, se $50< x_2 \leq 100$

$T(X_2)$:
- $X_2^{GM}(x_2) =$
    - $0$, se $x_2\leq50$
    - $\frac{x_2-50}{50}$, se $50< x_2 \leq 100$

Triangulo:
![text](./triangulo.png)
<b>Sujeira:</b>
<b>Tempo de Lavagem:</b>

$T(Y)$:
- $Y^{MC}(y) =$
    - $\frac{10-y}{10}$, se $0 \leq y \leq 10$
    - $0$, se $y> 10$

- $Y^{C}(y) =$
    - $\frac{y}{10}$, se $0 \leq y \leq 10$
    - $\frac{25-y}{15}$, se $10< y \leq 25$
    - $0$, se $y> 25$

- $Y^{M}(y) =$
    - $0$, se $y \leq 10$
    - $\frac{y-10}{15}$, se $10 < y \leq 25$
    - $\frac{40-y}{15}$, se $25< y \leq 40$
    - $0$, se $y> 40$

- $Y^{L}(y) =$
    - $0$, se $y\leq 25$
    - $\frac{y-25}{15}$, se $25< y \leq 40$
    - $\frac{60-y}{20}$, se $40< y \leq 60$
- $Y^{ML}(y) =$
    - $0$, se $y\leq 40$
    - $\frac{y-40}{20}$, se $40< y \leq 60$

Tabela:
![text](./tabela.png)