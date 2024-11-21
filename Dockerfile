# ベースイメージを指定
FROM node:16

# 作業ディレクトリを /app に設定
WORKDIR /app

# package.json と package-lock.json をコピー（まだない場合はこの手順をスキップ）
COPY package*.json ./

# 必要な依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# 開発用ポートを公開
EXPOSE 3000

# デフォルトコマンドとして開発サーバーを起動
CMD ["npm", "run", "dev"]
