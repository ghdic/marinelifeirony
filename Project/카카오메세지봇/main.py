# from command import Command
# kakao_opentalk_name = '슈퍼개구리'  # 톡방 이름
# c = Command()
# c.help(kakao_opentalk_name)

x = """
…….0…….
……111……
…..22222…..
….3333333….
…444444444…
..55555555555..
.6666666666666."""

x = x.split('\n').reverse()
x = '\n'.join(''.join(i) for i in zip(*x))
print(x)