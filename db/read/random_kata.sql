select id, kyu, language, description, starter_code, name, examples, tags from katas
WHERE kyu >= $1 AND kyu <= $2;