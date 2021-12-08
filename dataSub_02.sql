# a
select DISTINCT FirstName, LastName from Students join Exams on Students.StudentId == Exams.StudentId where ( Exams.Result < 3 )

# b
select grops from (Select S.FirstName, S.LastName, S.Grops from Students as S join Exams as E on E.StudentId == S.StudentId Where (E.Result < 3)) group by grops having count(*) > 10
