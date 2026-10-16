# loja online - frete gratis e Rapido com desconto para todo o Brasil

## contato
Duvidas: contato@loja.com.br
contato :11 0000-00000'

## Reflexão: merge x rebase

No desafio, criei duas branches que alteraram a mesma linha do README e provoquei um conflito de propósito. Resolvi no VS Code combinando as duas versões do título e finalizei com um commit de merge.

Usaria **merge** quando a branch já foi compartilhada ou enviada ao repositório remoto, porque ele preserva o histórico real e não reescreve nada.

Usaria **rebase** na minha branch local, que ninguém mais usa, para trazer as novidades da main e deixar o histórico linear antes de abrir um pull request.

Regra de ouro: nunca fazer rebase em branch já compartilhada ou enviada ao remoto, pois ele reescreve o histórico e pode quebrar o trabalho do time.