using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuthorWebsiteAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddVideoPurchaseRelations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_VideoPurchases_UserId",
                table: "VideoPurchases",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_VideoPurchases_VideoId",
                table: "VideoPurchases",
                column: "VideoId");

            migrationBuilder.AddForeignKey(
                name: "FK_VideoPurchases_Users_UserId",
                table: "VideoPurchases",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_VideoPurchases_Videos_VideoId",
                table: "VideoPurchases",
                column: "VideoId",
                principalTable: "Videos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VideoPurchases_Users_UserId",
                table: "VideoPurchases");

            migrationBuilder.DropForeignKey(
                name: "FK_VideoPurchases_Videos_VideoId",
                table: "VideoPurchases");

            migrationBuilder.DropIndex(
                name: "IX_VideoPurchases_UserId",
                table: "VideoPurchases");

            migrationBuilder.DropIndex(
                name: "IX_VideoPurchases_VideoId",
                table: "VideoPurchases");
        }
    }
}
